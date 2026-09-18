# Tài liệu Nguồn: Xác định Nhu cầu Người dùng & Thế mạnh AI (Identify User Needs & AI Strengths)

> **Mã khái niệm:** SOURCE-PAIR-01  
> **Nguồn trích dẫn:** Google People + AI Guidebook — *Identify user needs & AI strengths*

---

## 1. Tổng quan Khái niệm

Xây dựng sản phẩm AI cần sự cân bằng giữa khả năng của công nghệ và nhu cầu thực tế của người dùng. Một thiết kế hướng tới con người (people-first) phải xuất phát từ việc xác định vấn đề thực sự mà người dùng gặp phải và kiểm chứng các giả định trước khi quyết định sử dụng AI.

---

## 2. Chi tiết 4 Khái niệm Cốt lõi (C01 – C04)

### Khái niệm C01: Tiếp cận Hướng người dùng vs Hướng công nghệ (People-first vs Technology-first)

- **People-First Approach (Hướng người dùng):**  
  Bắt đầu bằng việc xác định bài toán/nỗi đau thực tế của người dùng. Phát biểu và kiểm chứng các giả định: Sản phẩm giải quyết vấn đề gì, cho ai, trong bối cảnh nào.
- **Technology-First Approach (Hướng công nghệ):**  
  Bắt đầu từ việc khám phá năng lực và giới hạn của một công nghệ AI có sẵn (ví dụ: bổ sung bộ phân loại an toàn - safety classifier - vào sản phẩm hiện có).
- **Điểm kết hợp:** Cả hai phương pháp đều có thể tạo ra sản phẩm thành công nếu được hỗ trợ bởi dữ liệu, phỏng vấn và quan sát hành vi thực tế của người dùng.

### Khái niệm C02: Đánh giá Giá trị Độc bản của AI & Bối cảnh Sử dụng (Deciding if AI adds unique value)

- **Khi nào nên dùng AI:** Chỉ nên tích hợp AI khi giải pháp đó giải quyết bài toán hiệu quả hơn rõ rệt, hoặc tăng cường trải nghiệm người dùng mà không gây phiền toái.
- **Cảnh báo (Risk):** Với các công việc có giá trị cao (high-value tasks), việc tự động hóa (automate) hoặc tăng cường (augment) bằng AI có thể gây phản cảm nếu người dùng không muốn bị can thiệp.
- **4 Yếu tố Cân nhắc (Considerations):**
  1. **Stakes (Mức độ rủi ro/Hậu quả):** Tình huống có rủi ro cao (high stakes - cần chính xác, tin cậy tuyệt đối) hay thấp (low stakes - chấp nhận sáng tạo/tổng hợp).
  2. **User Context (Bối cảnh người dùng):** Thời điểm, không gian và môi trường người dùng thao tác.
  3. **Cost (Chi phí):** Chi phí phát triển, vận hành và chi phí khi AI đưa ra kết quả sai.
  4. **Evidence of User Need:** Cần có nghiên cứu người dùng chứng minh nhu cầu trước khi quyết định pursued giải pháp AI.

### Khái niệm C03: Bản chất Vấn đề & Chiều kích Định danh (Understanding the Nature of the Problem)

- **Xác minh bài toán đúng (Verify correct problem):** Phỏng vấn nhóm người dùng đặc biệt ("Extreme Users") để phát hiện các khía cạnh tiềm ẩn, tần suất, bối cảnh và mức độ nghiêm trọng của vấn đề.
- **Yếu tố Xã hội - Kỹ thuật (Socio-technical drivers):** Tác động của bối cảnh xã hội, hạ tầng kỹ thuật và sự tiến hóa của vấn đề theo thời gian khi có AI.
- **Chiều kích Định danh (Dimensions of Identity):** Người dùng có nền tảng khác nhau (kinh tế, ngôn ngữ, vị trí, giới tính, khả năng tiếp cận) sẽ trải nghiệm bài toán khác nhau. Sản phẩm cần xử lý thành công các sub-problems trên đa dạng nhóm người dùng.
- **Ngữ cảnh Kỹ thuật rộng hơn (Broader Technological Context):** Mô hình AI thường kết hợp trong một hệ thống (ví dụ: recommender system kết hợp safety classifier). Dùng Model Cards và Data Cards để hiểu sự khác biệt giữa tiện ích mô hình (utility) và khả năng sử dụng thực tế (usability).

### Khái niệm C04: Định khung Vấn đề & Căn chỉnh Mục tiêu (Specification Alignment & Problem Framing)

- **Deterministic vs Open-ended Problems:** Bài toán xác định rõ kết quả hay bài toán mở đòi hỏi tư duy sáng tạo/linh hoạt.
- **Specification Alignment (Căn chỉnh mô tả mục tiêu):** Quá trình hướng dẫn và cấu hình hệ thống AI để hành vi của AI phù hợp chính xác với ý định (intent) của người dùng.
- **Phân rã Mục tiêu:**
  - **Primary Goal:** Mục tiêu chính người dùng muốn đạt được nhờ AI.
  - **Sub-goals:** Các mục tiêu phụ, bước đệm hoặc kỹ năng cần thiết trước khi giải quyết bài toán lớn.
  - **Underspecification (Mô tả thiếu):** Những tri thức/giả định ngầm định mà người dùng không diễn đạt rõ ra cho AI.
  - **Optimization & Reward Hacking:** AI tối ưu hóa sai mục tiêu (reward hacking) khi học một mục tiêu ngoài ý muốn nhưng lại thực hiện nó một cách "thành thạo", dẫn tới mất an toàn hoặc trải nghiệm tồi.

---

## 3. Mốc Đối chiếu Kiểm tra cho "Bạn Học AI"

Khi học viên giải thích về các khái niệm trên:
1. Nếu học viên cho rằng "AI giải quyết được mọi thứ mà không cần quan tâm nhu cầu người dùng", AI phải hỏi lại về **People-First Approach**.
2. Nếu học viên bỏ qua mức độ rủi ro (Stakes) hay sự phiền toái khi tự động hóa công việc quan trọng, AI phải gợi mở về **Deciding if AI adds unique value**.
3. Nếu học viên chỉ giải thích cho một nhóm người dùng chung chung mà không xét tới sự đa dạng (Identity dimensions) hay Extreme users, AI phải hỏi về **Dimensions of Identity**.
4. If học viên nhầm lẫn mục tiêu chính và mục tiêu phụ, hoặc không nhận ra nguy cơ **Reward Hacking / Underspecification**, AI phải đặt câu hỏi về **Specification Alignment**.
