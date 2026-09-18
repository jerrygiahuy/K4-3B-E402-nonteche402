# Trạng thái chuẩn bị CP4 — 18/09/2026

Tài liệu này ghi việc đã kiểm tra trong repo, không thay cho xác nhận nộp form checkpoint. Nguồn phân công: `NHIEM_VU_BAI_LAB.md`; người tổng hợp: Trần Vũ Gia Huy.

## Đã làm và có thể kiểm tra

- Điền tên, vai trò và phạm vi công việc trong `README.md`, `TEAMMATES.md`, `spec.md` §8. Chưa có mã học viên, cụm hoặc thông tin liên hệ để điền.
- Giữ số liệu khảo sát do nhóm trưởng cung cấp ở §1 với nhãn chưa đối chiếu log; ghi yêu cầu nguồn tại `evidence/README.md`.
- §2 so sánh ba ứng viên D3 ở mức dự kiến và không dùng tỷ lệ khảo sát chung làm số riêng từng ứng viên.
- §3 nghiên cứu mô tả công khai của Khanmigo và Duolingo Max; chưa dùng thử trực tiếp.
- §4 ghi lát cắt, non-goals, mức prototype, quyết định augment và bốn nguyên tắc HAX gắn với vị trí trong mã; phân biệt phần đã có và phần cần kiểm tra.
- §5–§7 đã có nội dung do Hiệp đưa lên repo. Kiểm toán script eval cho thấy kết quả 22/22 hiện không đo phản hồi của AI/prototype; `spec.md` đã ghi lại giới hạn này.
- Huy báo đã điền form CP2 và CP3, cung cấp link video Drive. Metadata Drive xác nhận có hai file `MVP.mkv` và `CP3.mkv`; đã xem bản CP3 Huy gửi trực tiếp, chưa có biên nhận nộp form.

## Video checkpoint do Huy cung cấp

| Mốc | File | Link | Mức kiểm tra |
|---|---|---|---|
| CP2 | MVP.mkv | [Video luồng prototype](https://drive.google.com/file/d/1I0A3aqYq2b-DOlYymKcN5ukSJNM7rZzV/view?usp=share_link) | Có metadata; chưa kiểm tra được nội dung video hoặc quyền xem của người ngoài. |
| CP3 | CP3.mkv | [Video thao tác CP3](https://drive.google.com/file/d/1xoo4eIkc1Bh76xgtwR7V0_t-FGsvvhZZ/view?usp=sharing) | Đã xem bản Huy gửi trực tiếp: dài 2 phút 10 giây, có thao tác nhập và phản hồi nhiều lượt. Phản hồi quan sát được trùng nhánh quy tắc trong `codebase/app.js`; video chưa chứng minh lời gọi AI thật hoặc số đo. Chưa kiểm tra quyền xem của người ngoài. |

Huy xác nhận các giờ trong kế hoạch chỉ để tham khảo; không dùng giờ tải file lên Drive để đánh giá việc nộp checkpoint. Vẫn cần biên nhận form nếu muốn xác minh đã nộp.

## Chờ bằng chứng hoặc xác nhận từ nhóm

| Việc | Tình trạng kiểm tra | Cần nhận để hoàn tất |
|---|---|---|
| CP1–CP3 đã nộp | Huy xác nhận đã điền form CP2 và CP3; chưa có biên nhận hoặc giờ nộp. CP1 chưa được xác nhận trong cuộc trao đổi. | Ảnh hoặc mã xác nhận từng form; số đo đã điền vào CP3 để đối chiếu với kết quả thử thật |
| Yêu cầu chi tiết Track D/D3 | Chưa thấy file chi tiết trong repo | File/ảnh chính thức để đối chiếu hard tests và phạm vi |
| Khảo sát 20 người | Chỉ có số liệu tổng hợp do nhóm trưởng cung cấp | Câu hỏi và 20 phản hồi gốc, cách tuyển mẫu, mã phản hồi, phép tính; quote nguyên văn nếu có |
| Ba ứng viên §2 | Chưa có dữ liệu riêng về số người, tần suất, hậu quả | Câu hỏi/quan sát phân biệt từng ứng viên; cập nhật quyết định nếu số liệu đổi |
| Cộng tác viên | Chưa có bằng chứng xác nhận Hiệp/Triển đã nhận lời mời và clone repo | Xác nhận trực tiếp của hai bạn hoặc PR/commit trên nhánh riêng |
| Bản demo chính | Nhóm trưởng đã chốt bản web `codebase/index.html`, tối đa 5 lượt | Triển/Hiệp kiểm tra lại lời gọi AI thật, nhánh quy tắc và hành vi so với lát cắt mục tiêu |
| Kiểm thử AI thực tế | Báo cáo 22/22 chỉ đọc kỳ vọng trong test case | Hiệp chạy case trên đúng bản demo/model, lưu output/trace, người chấm, pass/fail và %; đối chiếu yêu cầu ≥10 case từ chatlog |
| Quality bar | Nhóm trưởng đã chốt lúc 18:53 ngày 18/09: ít nhất 19/22 case toàn bộ và 4/4 case Lớp 3 trên phản hồi thật của bản web | Giữ nguyên ngưỡng; Hiệp bàn giao kết quả và trace để so sánh, không dùng 22/22 kiểm tra dữ liệu kỳ vọng |
| Willing users và validation | Không thấy xác nhận hoặc log trong repo | Tối thiểu 2 người đã khai CP1 nếu có; mục tiêu 5 ngoài nhóm; task, quan sát và quote thật, giữ danh tính riêng |
| Dùng thử flow | Chưa thử được trên trình duyệt của môi trường này | Huy/Triển mở bản demo, ghi từng bước tái hiện lỗi và quyết định sửa/giữ |
| Thông tin nhóm | Chưa có mã học viên, cụm, liên hệ đội trưởng | Điền theo thông tin thực qua kênh được phép |

## Lỗi và lệch cần ưu tiên trước khi chốt

1. `codebase/eval/run_eval.py` và `run_eval.js` tính pass từ `expected_behavior`, không gọi sản phẩm. Cần thay bằng lượt kiểm thử đầu ra thực tế; không dùng 100% hiện tại trong form hoặc slide như kết quả AI.
2. `codebase/agent.py` trả cùng một câu hỏi về ví dụ cho hai lời giải thích C01 khác nhau trong kiểm tra nhanh, kể cả một câu đầy đủ và một câu sai. Đây là dấu hiệu nhánh quy tắc chưa bám điểm thiếu theo nguồn; Hiệp/Triển cần đánh giá lại bằng test case thực tế.
3. Bản web 5 lượt đã được chọn làm demo chính. Từ video CP3 phát hiện bộ đếm web hiện `1/5/2`; đã sửa HTML để chỉ hiện `1/5`. Đã gắn nhãn riêng cho phản hồi quy tắc trong `codebase/app.js`; cần chạy lại để kiểm tra. Chuỗi câu hỏi hiện định sẵn và chưa dừng sớm khi giải thích đã đủ ý.
4. Video CP3 Huy gửi cho thấy giao diện chạy nhưng phản hồi giống nhánh quy tắc, không có dấu hiệu xác nhận lời gọi Gemini thật. Cần một đoạn ghi hình/trace an toàn của lời gọi AI thật, không chứa key hoặc dữ liệu bị hạn chế. Video CP3 hiện dài 2 phút 10 giây, trong khi README mô tả video khoảng 30 giây; nếu BTC áp dụng yêu cầu độ dài, cần cắt hoặc quay đoạn ngắn riêng.

## Trước khi gửi CP4

- Đối chiếu §1 và §2 với dữ liệu gốc; giữ mọi khoảng trống chưa có bằng chứng.
- Triển/Hiệp kiểm tra lại bản web 5 lượt, chỉnh luồng hỏi bám nguồn và đánh giá đúng quality bar đã chốt; cập nhật §4–§7 theo bằng chứng chạy thật, không đổi ngưỡng.
- Ghi rõ trong form CP4 những mục chưa xong, đính kèm link `spec.md` và bằng chứng có thật.
- Giữ xác nhận nộp form. Không đánh dấu CP4 hoàn thành khi chưa có xác nhận này.
