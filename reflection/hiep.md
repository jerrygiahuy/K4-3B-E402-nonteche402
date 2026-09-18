# Reflection Cá Nhân — Cao Đức Hiệp (Prompt & QA)

**Họ và tên:** Cao Đức Hiệp  
**Vai trò:** Prompt & QA  
**Nhóm:** nonteche402 · Phòng E402 — Đề tài D3 (Bạn học AI)  
**Ngày:** 18/09/2026

---

## 1. Các Đầu Việc Đã Hoàn Thành Thực Tế

1. **Chuyển đổi dữ liệu bài giảng & Concept Mapping:**
   - Đã biên soạn tài liệu nguồn chuẩn [`identify_user_needs_ai_strengths.md`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/source/identify_user_needs_ai_strengths.md) từ nội dung Google People + AI Guidebook (*Identify user needs & AI strengths*).
   - Đã cấu trúc hóa 4 khái niệm C01-C04 vào [`concept_mapping.json`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/source/concept_mapping.json) bao gồm ý chính (ground truth points), chỉ số thiếu sót, giới hạn và câu hỏi gợi mở cho từng khái niệm.

2. **Cấu hình System Prompt & Định nghĩa Hành vi AI:**
   - Cập nhật [`persona_buddy.md`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/prompts/v1/system/persona_buddy.md) (v1.3.0) vai "Bạn học AI", quy định chặt chẽ quy tắc mỗi lượt hỏi 1 câu gợi mở, không giảng bài thay và xử lý 4 lớp lỗi (*Ground Truth, Thiếu/Mơ hồ, Ngoài phạm vi, Lỗi đặc thù học tập*).

3. **Xây dựng Bộ Test Golden Set & Công cụ Đánh giá:**
   - Xây dựng file [`test_cases.json`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/eval/test_cases.json) chứa **22 test cases** chuẩn hóa (11 case Lớp 1, 4 case Lớp 2, 4 case Lớp 3, 3 case Lớp 4).
   - Viết script kiểm thử tự động [`run_eval.js`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/eval/run_eval.js) và xuất báo cáo kiểm thử [`eval_report.md`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/codebase/eval/eval_report.md) đạt **100% Pass rate (22/22 cases)**, đáp ứng Quality Bar (≥ 85%).

4. **Đóng góp Spec & Báo cáo Chặng (CP3/CP4):**
   - Đã cập nhật đầy đủ dữ liệu kiểm thử thực tế vào các mục **§5** (Kiểu lỗi — 4 lớp chỗ khó), **§6** (Bốn đường đi của trải nghiệm), và **§7** (Kiểm thử & Bảng % kết quả các lượt chạy) trong file [`spec.md`](file:///g:/AI_20K/CodeLab/K4-3B-E402-nonteche402/spec.md).

---

## 2. Bài Học và Kinh Nghiệm Rút Ra

1. **Thiết kế Prompt bám sát Nguồn Kiến thức:** Khi làm vai "Bạn học AI", thách thức lớn nhất là tránh để AI đóng vai "Giảng viên" hoặc giảng giải toàn bộ đáp án. Việc giới hạn mỗi lượt chỉ đặt 1 câu hỏi gợi mở xoáy vào ý bị thiếu giúp duy trì đúng phương pháp "Học bằng cách dạy" (D3).
2. **Quản lý Ranh giới An toàn (Layer 3):** Học viên có thể hỏi những câu ngoài phạm vi (nhờ viết code, hỏi y tế, đòi chấm điểm chính thức). Cần thiết lập nguyên tắc từ chối lịch sự, nêu rõ giới hạn vai trò bạn học và hướng về lại nội dung bài học.
3. **Giá trị của Golden Set Kiểm thử:** Việc chuẩn hóa 22 test cases có ID, ground truth points và pass/fail criteria rõ ràng giúp nhóm kiểm chứng chất lượng AI một cách định lượng thay vì đánh giá cảm tính.
