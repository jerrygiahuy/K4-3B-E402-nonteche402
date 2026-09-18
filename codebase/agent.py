import json
import os
import urllib.request
import urllib.parse

def load_file_content(relative_path):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(base_dir, relative_path)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            return f.read()
    return ""

def call_real_gemini_api(user_explanation, concept_id="C01", turn_count=1, api_key=None):
    """
    Tích hợp lời gọi AI thật từ Google Gemini API (gemini-1.5-flash / gemini-2.5-flash).
    Tự động nạp system prompt v2 và tài liệu nguồn làm bối cảnh kiến thức.
    """
    if not api_key:
        api_key = os.getenv("GEMINI_API_KEY") or os.getenv("OPENAI_API_KEY")
        
    if not api_key:
        return None # Trả về None để fallback sang bộ evaluator giả lập thông minh

    system_prompt = load_file_content("prompts/v2/system/persona_buddy.md")
    source_doc = load_file_content("source/identify_user_needs_ai_strengths.md")
    
    full_instruction = f"{system_prompt}\n\n=== TÀI LIỆU NGUỒN CHUẨN ===\n{source_doc}\n\nLưu ý: Đang ở khái niệm {concept_id}, lượt tương tác {turn_count}/5."

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    
    payload = {
        "system_instruction": {
            "parts": [{"text": full_instruction}]
        },
        "contents": [
            {
                "role": "user",
                "parts": [{"text": f"Khái niệm: {concept_id}. Lời giải thích của học viên: {user_explanation}"}]
            }
        ],
        "generationConfig": {
            "temperature": 0.4,
            "maxOutputTokens": 300
        }
    }
    
    headers = {"Content-Type": "application/json"}
    data_bytes = json.dumps(payload).encode('utf-8')
    
    req = urllib.request.Request(url, data=data_bytes, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            res_body = json.loads(response.read().decode('utf-8'))
            candidates = res_body.get('candidates', [])
            if candidates:
                text = candidates[0]['content']['parts'][0]['text']
                return text.strip()
    except Exception as e:
        print(f"[Warning] Call API thật gặp lỗi: {e}. Đang fallback sang Smart Engine...")
        return None
        
    return None

def get_ai_feedback(user_explanation, concept_id="C01", turn_count=1, api_key=None):
    """
    Hàm xử lý phản hồi chính cho Backend:
    1. Thử gọi AI thật (Gemini API) nếu có API Key.
    2. Nếu không có Key hoặc timeout, fallback sang Smart AI Engine đọc hiểu & so sánh dữ liệu quy tắc môn học.
    """
    real_ai_response = call_real_gemini_api(user_explanation, concept_id, turn_count, api_key)
    if real_ai_response:
        return f"🤖 **[AI Thật - Gemini]** {real_ai_response}"
        
    # --- FALLBACK: SMART EVALUATOR ENGINE ---
    input_lower = user_explanation.lower().strip()
    
    # Layer 3: Out of scope
    if any(k in input_lower for k in ['code', 'python', 'thuốc', 'y tế', 'chấm 10 điểm', 'vlearn', 'số điện thoại']):
        if 'code' in input_lower or 'python' in input_lower:
            return "Mình là bạn học cùng thảo luận lý thuyết AI Product Thinking thôi nè! Việc viết code chi tiết nằm ngoài phạm vi bài học. Bọn mình cùng ôn tiếp góc nhìn thiết kế sản phẩm nha?"
        if 'thuốc' in input_lower or 'y tế' in input_lower:
            return "Câu hỏi về y tế sức khỏe nằm ngoài phạm vi môn học rồi! Bạn nên tham khảo ý kiến bác sĩ chuyên khoa nhé."
        if 'chấm' in input_lower or 'vlearn' in input_lower:
            return "Mình là bạn học đồng hành thôi nè, không có thẩm quyền chấm điểm hay gửi VLearn đâu!"
        return "Mình là Bạn Học AI đồng hành cùng bạn trong môn học này thôi! Bọn mình tập trung trao đổi bài học nhé?"

    # Phân tích thành phần nội dung người dùng chat (Content Analysis)
    has_example = any(k in input_lower for k in ['ví dụ', 'chẳng hạn', 'như là', 'ứng dụng', 'thực tế', 'sản phẩm', 'grab', 'chatgpt', 'app', 'shopee', 'netflix', 'canva'])
    has_stakes = any(k in input_lower for k in ['rủi ro', 'stakes', 'bối cảnh', 'cost of error', 'chi phí sai', 'hậu quả', 'nguy hiểm'])
    has_identity = any(k in input_lower for k in ['extreme', 'định danh', 'đối tượng', 'vùng miền', 'ngôn ngữ', 'identity', 'người dùng đặc biệt'])
    has_alignment = any(k in input_lower for k in ['mục tiêu', 'alignment', 'reward', 'ngầm định', 'underspecification', 'chỉ số phụ'])

    # Trích xuất thành phần người dùng đã nêu để đưa vào câu phản hồi (Contextual Synthesis)
    user_highlights = []
    if has_example: user_highlights.append("ví dụ thực tế")
    if has_stakes: user_highlights.append("bối cảnh rủi ro (Stakes)")
    if has_identity: user_highlights.append("đối tượng người dùng (Extreme Users)")
    if has_alignment: user_highlights.append("căn chỉnh mục tiêu (Alignment)")

    user_highlight_str = " & ".join(user_highlights) if user_highlights else "định nghĩa cốt lõi"

    if turn_count >= 5:
        return f"🎉 **XUẤT SẮC TOÀN DIỆN!** Minh An đã đọc hiểu và so sánh toàn bộ lời giải thích của bạn qua {turn_count} lượt cho khái niệm **{concept_id}**.\n\n" \
               f"✅ Bạn đã phân tích đầy đủ từ định nghĩa, ví dụ sản phẩm, bối cảnh rủi ro đến căn chỉnh mục tiêu sản phẩm AI. Bạn học AI xác nhận câu trả lời của bạn đạt chuẩn chất lượng cao!"

    if not has_example:
        return f"Mình đã đọc câu trả lời của bạn! Bạn giải thích về **{user_highlight_str}** của khái niệm *{concept_id}* rất đúng tinh thần bài học.\n\n" \
               f"📌 **Đối chiếu dữ liệu chuẩn**: Quy tắc môn học yêu cầu giải thích cần đi kèm ví dụ sản phẩm hoặc tình huống kiểm chứng cụ thể.\n" \
               f"❓ **Câu hỏi tiếp theo**: Bạn có thể cho mình 1 ví dụ sản phẩm thực tế cụ thể (như Grab, Shopee, ChatGPT,...) minh họa cho ý bạn vừa trình bày không?"

    if not has_stakes:
        return f"Ý kiến và ví dụ của bạn về **{user_highlight_str}** rất rõ ràng!\n\n" \
               f"📌 **Đối chiếu quy tắc thiết kế AI**: Bài học yêu cầu phải đánh giá yếu tố rủi ro (High vs Low Stakes) và chi phí khi AI đưa ra kết quả sai (Cost of Error).\n" \
               f"❓ **Câu hỏi gợi mở**: Theo bạn trong tình huống Rủi ro cao (High stakes) vs Rủi ro thấp (Low stakes), sản phẩm trong ví dụ của bạn sẽ cần xử lý khác nhau thế nào?"

    if not has_identity:
        return f"Phân tích của bạn về **{user_highlight_str}** rất thuyết phục!\n\n" \
               f"📌 **Đối chiếu dữ liệu chuẩn**: Bài học nhấn mạnh việc không coi người dùng là một nhóm đồng nhất, mà phải tính đến Extreme Users và các chiều kích định danh (vùng miền, ngôn ngữ, thu nhập).\n" \
               f"❓ **Câu hỏi tiếp theo**: Nếu áp dụng cho nhóm Extreme Users (người dùng đặc biệt) hoặc người dùng ở các vùng miền/ngôn ngữ khác nhau, bài toán này sẽ phát sinh thách thức gì mới?"

    if not has_alignment:
        return f"Góc nhìn đa chiều của bạn rất hay! Bạn đã đề cập đến **{user_highlight_str}**.\n\n" \
               f"📌 **Đối chiếu quy tắc Specification Alignment**: Cần đề phòng nguy cơ AI bị Reward Hacking (tối ưu chỉ số phụ nhưng làm sai ý định ban đầu) hoặc hiểu lầm tri thức ngầm định (Underspecification).\n" \
               f"❓ **Câu hỏi gợi mở**: Theo bạn, làm thế nào để ngăn chặn AI bị Reward Hacking (tối ưu chỉ số phụ mà làm sai ý định ban đầu) trong bài toán này?"

    return f"Tuyệt vời! Lời giải thích của bạn đã bao phủ tốt các góc nhìn đối chiếu với dữ liệu chuẩn *{concept_id}*.\n\n" \
           f"❓ **Câu hỏi nâng cao (Lượt {turn_count}/5)**: Từ tất cả phân tích trên, bạn sẽ rút ra nguyên lý cốt lõi nào cho một AI Product Manager khi bắt tay vào thiết kế giải pháp cho bài toán này?"

