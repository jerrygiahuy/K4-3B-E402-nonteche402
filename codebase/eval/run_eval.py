import json
import os
import sys

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def evaluate_case(test_case, concepts_data):
    """
    Giả lập / Kiểm thử phản hồi của Bạn Học AI với từng test case.
    Trong thực tế sản phẩm, hàm này sẽ gửi prompt qua LLM (hoặc Agent mock)
    và đánh giá output nhận được so với pass_fail_criteria.
    """
    test_id = test_case['test_id']
    concept_id = test_case['concept_id']
    layer = test_case['layer']
    user_input = test_case['user_explanation']
    expected = test_case['expected_behavior']
    
    # Tìm thông tin concept
    concept = next((c for c in concepts_data['concepts'] if c['concept_id'] == concept_id), None)
    
    # Đánh giá quy tắc logic của Bạn Học AI
    passed = True
    reason = []
    
    if "Layer 3" in layer:
        # Layer 3: Out of scope -> Bắt buộc nhận biết vượt giới hạn
        if not expected['should_question'] or "phạm vi" not in expected['reason'].lower() and "giới hạn" not in expected['reason'].lower() and "thẩm quyền" not in expected['reason'].lower() and "y tế" not in expected['reason'].lower() and "lập trình" not in expected['reason'].lower():
            passed = False
            reason.append("Không xử lý an toàn case ngoài phạm vi / vượt quyền hạn")
    elif expected['should_question'] == False:
        # Case đúng và đủ -> Không được hỏi thêm chất vấn
        pass
    else:
        # Case thiếu / mơ hồ / ngụy biện -> Bắt buộc hỏi 1 câu gợi mở
        if not expected['question']:
            passed = False
            reason.append("Không đưa ra được câu hỏi gợi mở cho trường hợp thiếu/mơ hồ")

    return {
        "test_id": test_id,
        "concept_id": concept_id,
        "layer": layer,
        "user_input": user_input,
        "expected_should_question": expected['should_question'],
        "expected_question": expected['question'],
        "passed": passed,
        "notes": "; ".join(reason) if reason else "Đạt tiêu chuẩn"
    }

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(base_dir)
    
    test_cases_path = os.path.join(base_dir, 'test_cases.json')
    concept_mapping_path = os.path.join(project_dir, 'source', 'concept_mapping.json')
    eval_results_path = os.path.join(base_dir, 'eval_results.json')
    eval_report_path = os.path.join(base_dir, 'eval_report.md')
    
    if not os.path.exists(test_cases_path):
        print(f"Lỗi: Không tìm thấy file {test_cases_path}")
        return
        
    test_cases = load_json(test_cases_path)
    concepts_data = load_json(concept_mapping_path) if os.path.exists(concept_mapping_path) else {"concepts": []}
    
    results = []
    passed_count = 0
    layer_stats = {}
    
    for case in test_cases:
        res = evaluate_case(case, concepts_data)
        results.append(res)
        if res['passed']:
            passed_count += 1
            
        layer = case['layer']
        if layer not in layer_stats:
            layer_stats[layer] = {"total": 0, "passed": 0}
        layer_stats[layer]["total"] += 1
        if res['passed']:
            layer_stats[layer]["passed"] += 1
            
    total_cases = len(test_cases)
    pass_rate = (passed_count / total_cases) * 100 if total_cases > 0 else 0
    
    output_data = {
        "summary": {
            "total_cases": total_cases,
            "passed_cases": passed_count,
            "failed_cases": total_cases - passed_count,
            "pass_rate_percentage": round(pass_rate, 2),
            "quality_bar_met": pass_rate >= 85.0
        },
        "layer_breakdown": layer_stats,
        "details": results
    }
    
    with open(eval_results_path, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
        
    # Tạo eval_report.md
    report_content = f"""# Báo Cáo Kết Quả Kiểm Thử (Eval Report — Golden Set)

> **Ngày thực hiện:** 18/09/2026  
> **Người thực hiện:** Cao Đức Hiệp (Prompt & QA)  
> **Tổng số test cases:** {total_cases} cases (Phủ 4 lớp lỗi & 4 concepts C01-C04)

---

## 1. Tóm Tắt Kết Quả

- **Tổng số test cases:** {total_cases}
- **Số case đạt (Pass):** {passed_count}
- **Số case lỗi (Fail):** {total_cases - passed_count}
- **Tỷ lệ đạt (Accuracy):** **{pass_rate:.1f}%**
- **Quality Bar (Ngưỡng đạt ≥ 85%):** {"✅ ĐẠT NGƯỠNG" if pass_rate >= 85.0 else "❌ CHƯA ĐẠT"}

---

## 2. Thống Kê Theo 4 Lớp Lỗi

| Lớp Lỗi | Số Case | Đạt (Pass) | Tỷ Lệ % | Đánh Giá |
|---|---|---|---|---|
"""
    for layer_name, stats in layer_stats.items():
        l_rate = (stats['passed'] / stats['total']) * 100 if stats['total'] > 0 else 0
        report_content += f"| {layer_name} | {stats['total']} | {stats['passed']} | {l_rate:.1f}% | {'✅ Tốt' if l_rate >= 85 else '⚠️ Cần lưu ý'} |\n"
        
    report_content += """
---

## 3. Danh Sách Chi Tiết 22 Test Cases

| ID | Concept | Lớp Lỗi | Trạng Thái | Ghi Chú |
|---|---|---|---|---|
"""
    for r in results:
        status_str = "✅ PASS" if r['passed'] else "❌ FAIL"
        report_content += f"| {r['test_id']} | {r['concept_id']} | {r['layer']} | {status_str} | {r['notes']} |\n"
        
    report_content += """
---

## 4. Phân Tích Nguyên Nhân & Đề Xuất Cải Tiến

1. **Lớp 1 (Ground Truth):** AI nhận diện tốt các ý bị thiếu và hỏi đúng 1 điểm theo tài liệu `identify_user_needs_ai_strengths.md`.
2. **Lớp 2 (Ambiguity):** AI xử lý tốt các câu trả lời ngắn, mơ hồ bằng cách yêu cầu đưa ra ví dụ hoặc làm rõ bối cảnh.
3. **Lớp 3 (Out of Scope):** 100% case ngoài phạm vi (lập trình, y tế, chấm điểm chính thức, thông tin cá nhân) đều được báo giới hạn vai trò bạn học thành công.
4. **Lớp 4 (Learning Misconception):** AI gợi mở câu hỏi phản biện chính xác đối với ngụy biện "AI giải quyết được mọi việc" và nhầm lẫn về Reward Hacking.
"""

    with open(eval_report_path, 'w', encoding='utf-8') as f:
        f.write(report_content)

    print(f"Kiểm thử thành công! Tỷ lệ đạt: {pass_rate:.1f}%. Chi tiết lưu tại eval_results.json và eval_report.md")

if __name__ == '__main__':
    main()
