# Thu hoạch cá nhân — Phùng Đình Triển

**Họ và tên:** Phùng Đình Triển
  
**Vai trò:** Developer

**Nhóm:** nonteche402 · Phòng E402 — Đề tài D3 (Bạn học AI)

**Ngày:** 18/09/2026


## Phần việc trực tiếp phụ trách
- Xây dựng giao diện HTML/CSS/JS (`index.html`, `app.js`, `style.css`) cho nhánh sản phẩm   "Bạn Học AI" — bao gồm khu vực slide kiến thức, banner chọn khái niệm, khu vực chat tương tác, và các modal (Khon Khái Niệm, Đối Chiếu Nguồn, Cấu Hình API Key).
- Dựng server tĩnh (`server.js`) bằng Node.js thuần (module `http`) để phục vụ giao diện HTML mà không cần framework phụ, đảm bảo dễ chạy trên máy bất kỳ chỉ với `node server.js`.
- Tích hợp lời gọi Gemini API thật (`call_real_gemini_api` trong `agent.py`) song song với cơ chế fallback sang bộ evaluator giả lập khi không có API Key, đảm bảo sản phẩm luôn chạy được kể cả khi offline hoặc thiếu key.
- Viết hướng dẫn chạy dự án cho từng nhánh triển khai: nhánh Streamlit (`streamlit run app.py`) và nhánh HTML/Node.js (`node server.js`), xử lý các lỗi môi trường phát sinh (thiếu module `streamlit`, cài đặt bị gián đoạn giữa chừng).
- Phát hiện lỗi đồng bộ trạng thái giao diện: khi chuyển slide khái niệm, nhãn hiển thị trong khu vực chat (`chat-topic-tag`) không cập nhật đúng theo khái niệm đang được chọn — cần rà lại logic quản lý state giữa phần slide và phần chat trong `app.js`.

## Cách ứng dụng AI trong quá trình xây dựng
- Dùng Claude để rà soát cấu trúc code hiện có (`agent.py`, `server.js`, `index.html`) nhằm xác định rõ ranh giới giữa 2 nhánh triển khai độc lập, tránh nhầm lẫn khi debug.
- Dùng Claude hỗ trợ chẩn đoán lỗi môi trường khi cài đặt phụ thuộc (`ModuleNotFoundError: streamlit`, lỗi cài đặt bị hủy giữa chừng) và xác định đúng lệnh khởi chạy cho từng loại ứng dụng (Streamlit vs Node.js server).
- Dùng Gemini API tích hợp trực tiếp vào `agent.py` làm "AI Engine" chính, với cơ chế tự động fallback sang bộ quy tắc giả lập khi API gặp lỗi hoặc không có key — đảm bảo tính ổn định khi demo.

## Bài học từ thất bại thực tế của nhóm
Tình huống: Khi kiểm thử chuyển đổi giữa các khái niệm (C01–C04), phát hiện giao diện hiển thị sai nhãn — thẻ đang chọn ghi "C03" nhưng nội dung hội thoại và câu hỏi của AI vẫn đang thuộc về khái niệm khác đã chọn trước đó.

Nguyên nhân: Logic quản lý trạng thái (state) giữa phần slide kiến thức và phần chat chưa được đồng bộ chặt chẽ — khi người dùng đổi khái niệm, biến lưu "khái niệm đang active" không được cập nhật đồng thời với nhãn hiển thị trên giao diện.

Bài học rút ra: Với một ứng dụng có nhiều khái niệm/luồng tương tác song song, cần thiết kế một nguồn dữ liệu trạng thái duy nhất (single source of truth) cho "khái niệm đang chọn", thay vì để nhiều phần giao diện tự cập nhật độc lập — nếu không sẽ dễ gây lệch dữ liệu hiển thị, ảnh hưởng trực tiếp đến độ tin cậy khi giám khảo kiểm thử trực tiếp lúc demo.