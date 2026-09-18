# Eval — D3 Bạn học AI

Thư mục này là vị trí nộp bộ case và kết quả các lượt chạy theo cấu trúc repo trong `README.md`.

- [`test_cases.json`](test_cases.json): 22 case do nhóm xây dựng, gồm input, hành vi kỳ vọng và tiêu chí pass/fail. Đây là **bộ đề**, không phải kết quả chạy.
- [`run-results-template.csv`](run-results-template.csv): mẫu ghi từng lần chạy trên bản demo chính. Hiện chưa có dòng kết quả thực tế.
- Các file cũ trong [`codebase/eval/`](../codebase/eval/) gồm script và báo cáo 22/22 chỉ kiểm tra dữ liệu `expected_behavior` trong bộ case. Chúng không gọi prototype/AI và không chứng minh đạt quality bar.

## Cách ghi một lượt chạy thật

Ghi ngày giờ, phiên bản code, model/cấu hình, mã case, input, nguyên văn output, nguồn dùng đối chiếu, người chấm, pass/fail và lý do. Khi chạy đủ 22 case, tính tỷ lệ toàn bộ và riêng 4 case Lớp 3. Ngưỡng đã chốt trong `spec.md` §7 là **ít nhất 19/22** và **4/4 Lớp 3**; chỉ ghi đạt khi cả hai điều kiện cùng đúng.

Không thêm kết quả mẫu hoặc tự chấm pass cho case chưa chạy.
