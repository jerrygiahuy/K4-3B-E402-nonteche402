# Trạng thái chuẩn bị CP4 — 18/09/2026

Tài liệu này ghi việc đã kiểm tra trong repo, không thay cho xác nhận nộp form checkpoint. Nguồn phân công: `NHIEM_VU_BAI_LAB.md`; người tổng hợp: Trần Vũ Gia Huy.

## Đã làm và có thể kiểm tra

- Điền tên, vai trò và phạm vi công việc trong `README.md`, `TEAMMATES.md`, `spec.md` §8. Chưa có mã học viên, cụm hoặc thông tin liên hệ để điền.
- Giữ số liệu khảo sát do nhóm trưởng cung cấp ở §1 với nhãn chưa đối chiếu log; ghi yêu cầu nguồn tại `evidence/README.md`.
- §2 so sánh ba ứng viên D3 ở mức dự kiến và không dùng tỷ lệ khảo sát chung làm số riêng từng ứng viên.
- §3 nghiên cứu mô tả công khai của Khanmigo và Duolingo Max; chưa dùng thử trực tiếp.
- §4 ghi lát cắt, non-goals, mức prototype, quyết định augment và bốn nguyên tắc HAX gắn với vị trí trong mã; phân biệt phần đã có và phần cần kiểm tra.
- §5–§7 đã có nội dung do Hiệp đưa lên repo. Kiểm toán script eval cho thấy kết quả 22/22 hiện không đo phản hồi của AI/prototype; `spec.md` đã ghi lại giới hạn này.

## Chờ bằng chứng hoặc xác nhận từ nhóm

| Việc | Tình trạng kiểm tra | Cần nhận để hoàn tất |
|---|---|---|
| CP1–CP3 đã nộp | Không có xác nhận/form/video trong repo; không kết luận đã nộp | Ảnh hoặc mã xác nhận từng form, link video CP3 và trạng thái CP2 |
| Yêu cầu chi tiết Track D/D3 | Chưa thấy file chi tiết trong repo | File/ảnh chính thức để đối chiếu hard tests và phạm vi |
| Khảo sát 20 người | Chỉ có số liệu tổng hợp do nhóm trưởng cung cấp | Câu hỏi và 20 phản hồi gốc, cách tuyển mẫu, mã phản hồi, phép tính; quote nguyên văn nếu có |
| Ba ứng viên §2 | Chưa có dữ liệu riêng về số người, tần suất, hậu quả | Câu hỏi/quan sát phân biệt từng ứng viên; cập nhật quyết định nếu số liệu đổi |
| Cộng tác viên | Chưa có bằng chứng xác nhận Hiệp/Triển đã nhận lời mời và clone repo | Xác nhận trực tiếp của hai bạn hoặc PR/commit trên nhánh riêng |
| Bản demo chính | Web dùng 5 lượt; Streamlit dùng 2 lượt; kế hoạch ban đầu nói tối đa 2 | Triển và Hiệp chốt một bản, số lượt, đường gọi AI thật và phần mock |
| Kiểm thử AI thực tế | Báo cáo 22/22 chỉ đọc kỳ vọng trong test case | Hiệp chạy case trên đúng bản demo/model, lưu output/trace, người chấm, pass/fail và %; đối chiếu yêu cầu ≥10 case từ chatlog |
| Quality bar | Spec có ngưỡng đề xuất ≥85% và 100% Lớp 3 | Cả nhóm xác nhận ngưỡng trước hạn CP4 21:00; ghi thời điểm chốt, không đổi sau đó |
| Willing users và validation | Không thấy xác nhận hoặc log trong repo | Tối thiểu 2 người đã khai CP1 nếu có; mục tiêu 5 ngoài nhóm; task, quan sát và quote thật, giữ danh tính riêng |
| Dùng thử flow | Chưa thử được trên trình duyệt của môi trường này | Huy/Triển mở bản demo, ghi từng bước tái hiện lỗi và quyết định sửa/giữ |
| Thông tin nhóm | Chưa có mã học viên, cụm, liên hệ đội trưởng | Điền theo thông tin thực qua kênh được phép |

## Lỗi và lệch cần ưu tiên trước khi chốt

1. `codebase/eval/run_eval.py` và `run_eval.js` tính pass từ `expected_behavior`, không gọi sản phẩm. Cần thay bằng lượt kiểm thử đầu ra thực tế; không dùng 100% hiện tại trong form hoặc slide như kết quả AI.
2. `codebase/agent.py` trả cùng một câu hỏi về ví dụ cho hai lời giải thích C01 khác nhau trong kiểm tra nhanh, kể cả một câu đầy đủ và một câu sai. Đây là dấu hiệu nhánh quy tắc chưa bám điểm thiếu theo nguồn; Hiệp/Triển cần đánh giá lại bằng test case thực tế.
3. Bản web dùng 5 lượt và bản Streamlit dùng 2 lượt. Phần phản hồi quy tắc của web xuất hiện khi thiếu key hoặc API lỗi, nhưng giao diện chưa gắn nhãn rõ cho từng phản hồi. Cần chọn bản demo và phân biệt AI thật với mock/quy tắc.
4. Chưa chứng minh lời gọi AI thật trong một phiên chạy hoặc video CP3. Cần trace an toàn, không chứa key hay dữ liệu bị hạn chế.

## Trước khi gửi CP4

- Đối chiếu §1 và §2 với dữ liệu gốc; giữ mọi khoảng trống chưa có bằng chứng.
- Chốt phạm vi/luồng với Hiệp và Triển, chỉnh §4–§7 khớp đúng bản demo; chốt quality bar trước 21:00.
- Ghi rõ trong form CP4 những mục chưa xong, đính kèm link `spec.md` và bằng chứng có thật.
- Giữ xác nhận nộp form. Không đánh dấu CP4 hoàn thành khi chưa có xác nhận này.
