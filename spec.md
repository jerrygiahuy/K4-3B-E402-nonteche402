# Template AI Spec *(spec.md — commit trước hạn chốt spec: 21:00 18/9, tại CP4 · quality bar chốt từ thời điểm nộp)*

> Cấu trúc phủ đúng "SPEC 8 phần" của chương trình: Bằng chứng (§1-§2) · Lát cắt (§4) · Canvas (đính kèm CP1) · Augment/Automate (§4) · 4 đường đi của trải nghiệm (§6) · Kiểu lỗi (§5) · Kiểm thử (§7) · Phân công (§8). Hướng dẫn viết từng mục: `02-guide.md`.

# AI SPEC — Học bằng cách dạy · Nhóm nonteche402 · Phòng E402

Hướng: D — Học tập thích ứng & tương tác
Đề: D3 — Học bằng cách dạy
Loại: [ ] Tối ưu tính năng có sẵn  [x] Tính năng mới
Trạng thái: Bản nháp CP1 — đang kiểm chứng pain và thu thập bằng chứng

## §1. User & Job

- Job executor:
  Học viên trong khóa vừa học xong một khái niệm và muốn
  kiểm tra mức độ hiểu trước khi làm bài lab.

- Workflow hiện tại — giả thuyết cần kiểm chứng:
  Đọc hoặc xem bài giảng → cảm thấy đã hiểu → thử giải thích
  lại → gặp chỗ chưa rõ → tìm tài liệu hoặc hỏi người khác.

- Core JTBD:
  Kiểm tra khả năng giải thích một khái niệm vừa học và
  xác định phần cần ôn lại trước khi làm bài lab.

- Problem statement — giả thuyết cần kiểm chứng:
  Học viên cảm thấy hiểu khi đọc bài nhưng khi tự giải thích
  lại thì chưa diễn đạt rõ và chưa xác định được chỗ hiểu thiếu,
  khiến việc ôn tập thiếu trọng tâm.

- Evidence: Đang thu thập, chưa có số liệu.

## §2. Impact & quyết định chọn

### So sánh các phương án trong D3

| Ứng viên | Số người gặp | Tần suất | Chi phí/hậu quả mỗi lần | Khả thi dự kiến |
|---|---|---|---|---|
| Giảng lại một khái niệm, nhận một câu hỏi gợi mở về điểm chưa rõ | Chờ khảo sát | Chờ khảo sát | Chờ xác minh thời gian và khó khăn khi tự kiểm tra kiến thức | Phạm vi nhỏ, một lượt giải thích và hỏi lại |
| Giảng lại toàn bộ bài học, nhận phản hồi tổng thể | Chờ khảo sát | Chờ khảo sát | Chờ xác minh khó khăn khi ôn toàn bài | Phạm vi rộng, cần kiểm tra nhiều nội dung |
| Giảng cho nhiều nhân vật mô phỏng với trình độ khác nhau | Chờ khảo sát | Chờ khảo sát | Chờ xác minh nhu cầu luyện giải thích cho nhiều đối tượng | Nhiều luồng tương tác, khó kiểm thử hơn |

### Phương án chọn tạm thời

Giảng lại một khái niệm cho AI đóng vai người mới học;
AI chọn một điểm thiếu hoặc chưa rõ so với tài liệu để hỏi lại,
học viên sửa lời giải thích.

Lý do chọn sơ bộ: phạm vi nhỏ, có thể đối chiếu với tài liệu
và kiểm thử từng lượt tương tác trong thời gian hackathon.
Chưa có số liệu để kết luận phương án này có impact cao nhất.

### Phương án chưa chọn

- Giảng lại toàn bộ bài: phạm vi kiến thức và phản hồi quá rộng
  cho prototype ban đầu.
- Nhiều nhân vật mô phỏng: tăng số luồng cần xây dựng và kiểm thử.

### Cập nhật sau khảo sát

Bổ sung số người gặp, tần suất, hậu quả và lý do chọn bằng số liệu;
điều chỉnh quyết định nếu bằng chứng không ủng hộ giả thuyết.

## §3. Giải pháp tương tự đã nghiên cứu
- [Sản phẩm 1]: flow / đáng học / đáng né / mình khác gì
- [Sản phẩm 2]: ...

## §4. Thiết kế
- Lát cắt MỘT CÂU (1 user · 1 việc · 1 quyết định AI · 1 kết quả):
- Non-goals (≥3 thứ KHÔNG build):
- Mức prototype nhắm tới: [ ] Sketch [ ] Mock [ ] Working — phần nào mock, phần nào thật:
- Automation: [ ] augment [ ] conditional [ ] automate — lý do theo cost-of-error:
- §4b. Nguyên tắc đã áp dụng (≥4 — HAX/PAIR, xem guide):
  | Nguyên tắc | Áp cụ thể vào đâu trong prototype |
  |---|---|

## §5. Kiểu lỗi — 4 lớp chỗ khó + kịch bản (≥8) [bảng theo guide §2.5]

## §6. Bốn đường đi của trải nghiệm
- Happy path: · Low-confidence (②): · Failure/không căn cứ (①): · Correction (user sửa):
- Khi bị đòi ngoài phạm vi (③): · Case đặc thù domain (④):

## §7. Kiểm thử
- Chiều chất lượng + định nghĩa kiểm chứng được:
- Golden set (≥20 case theo cơ cấu trong guide §2.6, file trong eval/):
- Quality bar (chốt từ hạn chốt spec của khoá, giữ nguyên sau đó): "Đạt khi ≥ ___% qua bộ, và ___"
- Kết quả các lượt chạy (bảng % — cập nhật đến trước CP6):

## §8. Phân công & kế hoạch
- Phân công có tên: spec / evidence / prompt / code / demo
- Willing users (≥2 tên) + kế hoạch vòng validation *(bonus, nếu làm)*:
- Multi-prototype (nếu làm): trục khác biệt của ≥2 phương án + lý do chọn:

## §9. Changelog
| Thời điểm | Đổi gì | Vì sao (trỏ về feedback/case nào) |
