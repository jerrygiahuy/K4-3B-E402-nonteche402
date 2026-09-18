# Kiểm tra lời gọi AI thật của bản web

## Trạng thái bằng chứng

`codebase/app.js` có nhánh gọi Gemini API khi có key. Khi nhận được `candidates` trong phản hồi, giao diện thêm nhãn **[AI Thật - Gemini API]**; khi không có key hoặc gọi lỗi, giao diện dùng nhánh quy tắc với nhãn **[Phản hồi quy tắc - không phải AI thật]**. Việc có mã gọi API **không chứng minh** một phiên đã gọi thành công.

Video `CP3.mkv` đã xem cho thấy các câu trả lời trùng nhánh quy tắc; không có dấu hiệu xác nhận một phản hồi Gemini thành công. Môi trường kiểm tra hiện không có API key, nên chưa thể tạo trace chạy thật ở đây.

## Bằng chứng cần thu từ máy chạy demo

1. Chạy bản web chính với API key cấu hình trên máy nhóm. Không đưa key vào video, repo hoặc ảnh chụp.
2. Quay một phiên nhập lời giải thích và kết quả có nhãn **[AI Thật - Gemini API]**. Giữ được khái niệm, input, output và nhãn trong cùng video hoặc hai khung hình liên tiếp.
3. Lưu thời điểm, model/cấu hình thực dùng và một trace an toàn cho lượt đó (ví dụ trạng thái thành công và output đã ẩn dữ liệu riêng). Không chụp URL request nếu URL chứa key.
4. Nếu chỉ xuất hiện nhãn **[Phản hồi quy tắc]**, ghi là bản mock/quy tắc; không dùng lượt đó làm bằng chứng AI thật.

**Chưa hoàn tất:** chờ video/trace thật từ Triển hoặc Huy để đối chiếu và cập nhật `spec.md` §4, §7.
