# Phiên validation U01 — Nguyễn Quang Đạo

**Vai trò:** Chưa được cung cấp

**Willing user đã khai từ CP1?:** Chưa xác nhận

**Thời điểm / bản demo:** 19/09/2026 · MVP web

**Nhiệm vụ:** Thử Slide 3 — Extreme Users & Identity Dimensions và Slide 4 — Specification Alignment & Reward Hacking; giải thích khái niệm, trả lời câu hỏi gợi mở rồi sửa lời giải thích.

## Bối cảnh

Đạo thường tiếp cận bài toán theo kiểu Tech-First, nghĩ đến mô hình, dữ liệu và prompt trước. Mục tiêu dùng thử là xem Bạn học AI có phản biện được các góc khuất về Extreme Users và Reward Hacking không.

## Quan sát trong lúc dùng

- Ban đầu tưởng mỗi câu hỏi mở vào cùng một luồng chat; sau đó nhận ra mỗi câu hỏi có một phiên độc lập và đánh giá cách tách này giúp không lẫn chủ đề.
- Với câu hỏi về Identity Dimensions, Đạo ban đầu cho rằng tiếng Việt ở đâu cũng giống nhau, sau đó tự lấy ví dụ voice bot khó nhận giọng miền Trung và cho biết AI bắt được ngữ cảnh này.
- Với Reward Hacking, Đạo giải thích tối ưu watch-time; AI hỏi về video giật gân, ảnh hưởng tâm lý và Guardrail Metric. Đạo bổ sung tỷ lệ phản hồi tiêu cực/báo cáo nội dung xấu dưới 0,1% và độ đa dạng chủ đề video.

## Năm câu hỏi sau khi dùng

1. **Bạn hiểu mình cần làm gì ở từng bước không? Bước nào chưa rõ?**

   “Giao diện chia 3/4 slide và 1/4 chat rất trực quan, nhìn vào là hiểu ngay: đọc luận điểm cốt lõi và giới hạn, sau đó chọn câu hỏi phản biện bên phải để bắt đầu ‘bật’ lại AI. Điểm chưa rõ duy nhất là lúc đầu mình tưởng mỗi lần chọn câu hỏi khác thì chat chung một luồng, sau mới nhận ra mỗi câu hỏi mở ra một phiên độc lập. Cái này hay, đỡ bị lẫn chủ đề.”

2. **Câu hỏi nào của Bạn học AI hữu ích hoặc chưa đúng trọng tâm? Vì sao?**

   “Câu hỏi ở Slide 4 về Reward Hacking! Mình giải thích rằng: ‘Trong hệ thống gợi ý video ngắn, mình tối ưu thời gian xem (watch-time) của người dùng’. Minh An phản biện ngay: ‘Nếu thuật toán tối ưu watch-time bằng cách liên tục phân phối video giật gân, độc hại khiến người dùng nghiện nhưng ảnh hưởng tâm lý thì mục tiêu cốt lõi bị lệch thế nào? Bạn đặt Guardrail Metric nào để chặn?’. Câu này rất ‘chạm’, đúng tư duy làm sản phẩm AI thực thụ chứ không chỉ nhìn vào accuracy kỹ thuật.”

   “Có một lần mình thử gõ câu trêu đùa: ‘hôm nay trời đẹp quá bạn ơi’, Minh An đã chặn đúng và nhắc mình quay lại câu hỏi, nhưng câu từ nhắc nhở hơi giống mẫu bot mặc định, chưa mang sắc thái bạn học dí dỏm lắm.”

3. **Sau câu hỏi đó, bạn đã sửa phần nào trong lời giải thích?**

   “Sau câu hỏi về Guardrail Metric của Minh An, mình đã bổ sung hẳn một ý mới vào lời giải thích: Không chỉ tối ưu Primary Metric là Total Watch Time, mà bắt buộc phải có Guardrail Metrics là tỷ lệ phản hồi tiêu cực/báo cáo nội dung xấu dưới 0.1% và đo lường độ đa dạng của chủ đề video để tránh biến thuật toán thành cỗ máy câu view độc hại.”

4. **Có bước nào khiến bạn khó tiếp tục không? Khi đó bạn đã làm gì?**

   “Ở Slide 3 về Extreme Users, khi Minh An hỏi về ‘Chiều kích định danh (vùng miền, ngôn ngữ) ảnh hưởng ra sao’, lúc đầu mình định bỏ qua vì nghĩ tiếng Việt thì ở đâu chả như nhau. Sau đó mình nhớ ra trường hợp nhận diện giọng nói AI (Voice Bot) gặp khó khăn với giọng địa phương nặng miền Trung. Mình đã lấy ví dụ đó đưa vào và thấy Minh An bắt được context rất nhạy.”

5. **Nếu được thay đổi một điều trong trải nghiệm này, bạn muốn thay đổi gì?**

   “Mình muốn ở cuối phiên, khi đạt 5 lượt hoặc bấm ‘Đối chiếu nguồn’, hệ thống hiển thị một bảng so sánh ngắn 2 cột (Diff View): Cột trái là ‘Ý bạn vừa giải thích’ và cột phải là ‘Chuẩn kiến thức trong bài giảng’, đồng thời gạch chân xem mình đã bao phủ được bao nhiêu % ý chính. Như vậy sẽ tạo cảm giác hoàn thành (Aha moment) rất mạnh trước khi kết thúc!”

## Quyết định sau phiên

- Giữ phiên chat độc lập theo từng câu hỏi vì người thử đánh giá việc này giúp không lẫn chủ đề.
- Cân nhắc thay lời nhắc ngoài phạm vi bằng giọng Bạn học AI gần gũi hơn.
- Để Diff/Coverage View vào backlog: chỉ hiển thị mức bao phủ sau khi có cách đối chiếu nguồn đáng tin cậy.
