# Nhật ký dùng thử

**Số người đã trực tiếp dùng thử:** 2. **Số phiên có log trong repo:** 2. Mục tiêu theo README là 5 người, gồm 2 willing users đã khai từ CP1; chưa xác nhận hai người dưới đây có thuộc danh sách CP1 hay không.

| Mã | Người đã dùng thử | Công khai tên | Thuộc willing users CP1? | Ghi chép phiên |
|---|---|---|---|---|
| U01 | Nguyễn Quang Đạo | Nhóm trưởng xác nhận đã đồng ý | Chờ xác nhận | [Phiên U01](u01-nguyen-quang-dao.md) |
| U02 | Ngô Thế Việt | Nhóm trưởng xác nhận đã đồng ý | Chờ xác nhận | [Phiên U02](u02-ngo-the-viet.md) |

| Mã người thử / vai trò / willing user CP1? | Thời điểm và bản demo | Nhiệm vụ được giao | Hành vi quan sát được / chỗ bị kẹt | Quote nguyên văn (ghi rõ nói khi nào) | Mức nghiêm trọng 0–3 | Quyết định sửa hoặc giữ / lý do | Link ghi chép 5 câu |
|---|---|---|---|---|---|---|---|
| U01 · Nguyễn Quang Đạo · vai trò chưa cung cấp · CP1: chờ xác nhận | 19/09/2026 · MVP web | Thử Slide 3–4, giải thích về Extreme Users và Reward Hacking | Ban đầu nhầm chat là một luồng chung; tự nhận ra từng câu hỏi có phiên riêng. Khi gặp Identity Dimensions, tự lấy ví dụ voice bot khó nhận giọng miền Trung. | “Câu này rất ‘chạm’, đúng tư duy làm sản phẩm AI thực thụ chứ không chỉ nhìn vào accuracy kỹ thuật.” — sau khi AI phản biện Reward Hacking | 1 | Giữ phiên độc lập; thêm giải thích ngắn khi đổi câu hỏi. Đưa Diff/Coverage View vào backlog vì cần đối chiếu nguồn đáng tin cậy. | [U01](u01-nguyen-quang-dao.md) |
| U02 · Ngô Thế Việt · vai trò chưa cung cấp · CP1: chờ xác nhận | 19/09/2026 · MVP web | Thử Slide 1–2, giải thích về People-First và Stakes/Cost of Error | Khựng khoảng 15 giây vì chưa thấy số lượt 0/5 và chưa rõ lúc dùng Đối chiếu nguồn. Ở lượt 4 tự xem Ý chính cốt lõi để tiếp tục. | “Có thêm 1–2 từ khóa gợi ý bên dưới ô chat sẽ giúp cuộc thảo luận trôi chảy hơn rất nhiều!” — sau khi dùng | 2 | Ưu tiên làm rõ tiến trình và thời điểm đối chiếu nguồn; cân nhắc hints theo ngữ cảnh. Giữ thẻ Ý chính cốt lõi vì người thử đã dùng để tự tiếp tục. | [U02](u02-ngo-the-viet.md) |

**Thang mức nghiêm trọng do nhóm dùng để xếp ưu tiên:** 0 = không thấy vướng; 1 = do dự nhưng tự tiếp tục; 2 = cần gợi ý hoặc đi sai bước rồi tự sửa; 3 = không hoàn thành nhiệm vụ hoặc bị phản hồi dẫn sai trọng tâm. Ghi hành vi làm căn cứ cho mức đã chọn.

## Tổng hợp sau các phiên thử

- Chủ đề lặp nhiều nhất: Người thử cần thấy rõ tiến trình, trạng thái kết thúc và phần đối chiếu nguồn.
- Sẽ sửa trước demo: Làm rõ bộ đếm lượt và thời điểm dùng Đối chiếu nguồn; thử thêm 1–2 từ khóa gợi ý theo ngữ cảnh khi người học bí ý.
- Giữ nguyên và lý do: Giữ câu hỏi bám ví dụ người học vừa nêu, thẻ Ý chính cốt lõi và các phiên chat độc lập theo câu hỏi vì cả hai người thử dùng/đánh giá tích cực.
- Để dành sau demo: Diff/Coverage View so sánh lời giải thích với nguồn, vì cần cơ chế đối chiếu đáng tin cậy hơn trước khi hiển thị tỷ lệ bao phủ.
