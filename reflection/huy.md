# Thu hoạch cá nhân — Trần Vũ Gia Huy

**Vai trò:** Nhóm trưởng · BA/PM

**Nhóm:** nonteche402 · Phòng E402 · Đề D3 — Học bằng cách dạy

**Ngày cập nhật:** 18/09/2026

## Công việc tôi đã thực hiện

- Tôi tổng hợp vấn đề người học và viết các mục User & Job, so sánh phương án, thiết kế trong [`spec.md`](../spec.md). Theo số liệu khảo sát 20 người mà tôi đã đối chiếu với phản hồi gốc, 19/20 gặp khó khăn khi học khái niệm mới ở mức thường xuyên hoặc thỉnh thoảng; 14/20 giải thích lại để tự kiểm tra; 10/20 lo AI hỏi không đúng trọng tâm. Tôi dùng các số này để xác định vấn đề và mối lo ngại, không coi đó là số đo hiệu quả prototype hoặc impact riêng của từng phương án.
- Tôi cùng nhóm chọn lát cắt giảng lại **một khái niệm**, nhận **một câu hỏi gợi mở** về điểm thiếu hoặc chưa rõ, rồi để học viên sửa lời giải thích. Phạm vi này phù hợp để kiểm tra từng lượt tương tác và đối chiếu với tài liệu nguồn.
- Tôi tổng hợp bản AI Spec, đưa link video prototype CP2 và demo CP3 vào spec, đồng thời chốt trước ngưỡng chất lượng CP4: ít nhất **19/22 case** toàn bộ và **4/4 case ngoài phạm vi** trên đầu ra thực tế của bản web. Tôi phân biệt kết quả kiểm tra dữ liệu kỳ vọng với kết quả chạy AI thật.
- Tôi chuẩn bị câu hỏi và nhiệm vụ cho người ngoài nhóm dùng thử: để họ tự giải thích một khái niệm, trả lời câu hỏi của hệ thống, sửa lời giải thích rồi mô tả điều hữu ích, chưa rõ hoặc khó dùng. Kết quả dùng thử chỉ được ghi khi có quan sát và câu trả lời thực tế.

## Quyết định và bài học rút ra

Khảo sát về khó khăn học tập giúp nhóm chọn vấn đề, nhưng chưa chứng minh rằng công cụ sẽ giúp người học hiểu tốt hơn. Vì vậy tôi giữ các con số về từng phương án trong §2 ở trạng thái chờ khảo sát riêng, và ưu tiên kiểm thử xem câu hỏi của hệ thống có bám đúng lời giải thích cùng tài liệu nguồn hay không.

Khi xem lại video và bộ test, tôi thấy cần phân biệt rõ ba việc: giao diện đi hết luồng, mã có nhánh gọi API, và một lời gọi AI thật đã trả lời thành công. Tương tự, báo cáo 22/22 từ script hiện có chỉ kiểm tra trường kỳ vọng của case; để kết luận đạt quality bar, nhóm cần lưu đầu ra thực tế, người chấm và lý do pass/fail. Đây là điểm tôi cần theo dõi với bạn phụ trách phát triển và kiểm thử.

## Việc tôi tiếp tục phụ trách

- Phối hợp với Triển ghi lại một lượt gọi AI thành công trên bản demo chính và chỉ rõ lúc nào hệ thống dùng phản hồi quy tắc.
- Phối hợp với Hiệp nhận bảng chấm 22 case từ đầu ra thực tế, so với ngưỡng đã chốt và cập nhật §7.
- Tổ chức dùng thử với willing users, ghi quan sát và câu trả lời nguyên văn theo mã người thử; chỉ kết luận những điều dữ liệu cho phép.
- Hoàn thiện phần slide, thông tin thành viên còn thiếu và cập nhật repo theo đúng cấu trúc nộp bài.
