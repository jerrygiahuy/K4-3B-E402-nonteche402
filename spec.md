# AI SPEC — Học bằng cách dạy · Nhóm nonteche402 · Phòng E402

Hướng: D — Học tập thích ứng & tương tác
Đề: D3 — Học bằng cách dạy
Loại: [ ] Tối ưu tính năng có sẵn  [x] Tính năng mới
Trạng thái: Bản nháp chuẩn bị CP4 — các mục chưa kiểm chứng được ghi rõ bên dưới

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

- Evidence: Theo kết quả khảo sát bổ sung do nhóm trưởng cung cấp, khảo sát có 20 người trả lời: 19/20 người (95%) thường xuyên hoặc thỉnh thoảng gặp khó khăn khi học khái niệm mới; 14/20 người (70%) thường xuyên hoặc thỉnh thoảng giải thích lại để tự kiểm tra; 10/20 người (50%) lo AI hỏi không đúng trọng tâm. Đây là bằng chứng ban đầu để định hướng D3: bạn học AI đặt câu hỏi cụ thể, bám sát lời giải thích và tài liệu nguồn. Các số liệu này chưa trực tiếp chứng minh hiệu quả của giải pháp.
  Nguồn: số liệu tổng hợp do nhóm trưởng cung cấp; cần đính kèm log 20 phản hồi để đối chiếu.
  Chưa có câu hỏi và phản hồi gốc trong repo; chưa xác minh cách tuyển mẫu, phản hồi trùng hoặc quote nguyên văn. Không coi các tỷ lệ trên là kết quả dùng thử sản phẩm.

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

Nghiên cứu tài liệu công khai ngày 18/09/2026; nhóm chưa ghi nhận dùng thử trực tiếp các sản phẩm này.

| Giải pháp | Flow được nhà cung cấp mô tả | Điều học và điều tránh cho D3 | Điểm khác của lát cắt nhóm |
|---|---|---|---|
| [Khanmigo Tutor Me](https://www.khanacademy.org/khanmigo) | Học viên trao đổi với gia sư AI; hệ thống hỏi gợi mở thay vì đưa ngay đáp án. | Học cách giữ phần suy nghĩ cho học viên. Cần tránh câu hỏi quá chung hoặc không bám tài liệu. | Học viên bắt đầu bằng lời giải thích một khái niệm; nhóm muốn hỏi đúng một điểm thiếu so với nguồn được chọn. |
| [Duolingo Max Roleplay](https://blog.duolingo.com/duolingo-max/) | Học viên thực hành đối thoại theo tình huống rồi nhận phản hồi sau lượt hội thoại. | Học nhịp tương tác và đối chiếu sau khi người học thực hành. Tránh mở quá nhiều tình huống trong prototype đầu. | D3 kiểm tra giải thích khái niệm học thuật bằng văn bản, không luyện hội thoại ngoại ngữ. |

Các nhận định ở cột "điều học" và "điểm khác" là phân tích của nhóm từ mô tả công khai, chưa phải kết quả quan sát người dùng.

## §4. Thiết kế
- Lát cắt một câu: Học viên vừa học một khái niệm nhập lời giải thích; AI đối chiếu nguồn để chọn một điểm thiếu hoặc mơ hồ và hỏi lại; học viên sửa lời giải thích trước khi xem tài liệu đối chiếu.
- Non-goals: không luyện bằng giọng nói hoặc avatar; không nhiều nhân vật mô phỏng; không chấm điểm chính thức hoặc gửi VLearn; không đăng nhập hay tích hợp VLearn; không giảng lại toàn bài.
- Mức prototype nhắm tới: Working cho một luồng văn bản với ít nhất một lời gọi AI thật; thẻ kiến thức và phần đối chiếu nguồn là nội dung biên soạn sẵn. Bản web `codebase/index.html` hiện có giao diện 4 khái niệm, 5 lượt và gọi Gemini khi nhập key; không có key hoặc gọi lỗi thì dùng phản hồi quy tắc. Bản Streamlit `codebase/app.py` giới hạn 2 lượt. Cần chốt một bản demo và một số lượt với Triển, Hiệp trước khi tuyên bố bản chạy khớp spec.
- Automation: [x] augment [ ] conditional [ ] automate. AI chỉ gợi một câu hỏi; học viên quyết định sửa lời giải thích và tự xem nguồn. Câu hỏi sai có thể khiến học viên ôn lệch, nên không tự chấm điểm hay xác nhận đã hiểu chỉ vì đủ số lượt.

### §4b. Nguyên tắc thiết kế HAX/PAIR

| Nguyên tắc | Áp cụ thể vào prototype | Trạng thái kiểm tra |
|---|---|---|
| [HAX G1 — Nói rõ hệ thống làm gì](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-what-the-system-can-do/) | Banner và lời chào trong `codebase/index.html`, `codebase/app.js` nêu việc giải thích khái niệm và hỏi lại. | Đã có trong mã; cần xem trên trình duyệt và thử với người dùng. |
| [HAX G2 — Nói rõ giới hạn độ tin cậy](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-how-well-the-system-can-do-what-it-can-do/) | Cần báo khi dùng phản hồi quy tắc hoặc khi chưa có nguồn đủ chắc; không gọi mọi phản hồi là AI thật. | Chưa đạt: fallback chưa được gắn nhãn rõ trong giao diện. |
| [HAX G9 — Hỗ trợ sửa](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/) | Người học nhập tiếp lời giải thích và có nút reset phiên. | Đã có luồng nhập tiếp/reset; cần kiểm tra việc giữ nội dung khi API lỗi. |
| [HAX G10 — Thu hẹp phạm vi khi không chắc](https://www.microsoft.com/en-us/haxtoolkit/guideline/scope-services-when-in-doubt/) | Nếu lời giải thích mơ hồ, hỏi làm rõ một điểm; nếu ngoài nguồn, báo giới hạn và mời quay lại khái niệm. | Prompt có yêu cầu; chưa có kết quả chạy thật chứng minh. |

Thiết kế thêm theo [PAIR Guidebook](https://pair.withgoogle.com/guidebook-v2/chapters): cho học viên xem nguồn và sửa câu trả lời; cần thử xem phần đối chiếu giúp họ hiểu hay khiến họ chỉ sao chép đáp án.

## §5. Kiểu lỗi — 4 lớp chỗ khó + kịch bản (≥8)

| Mã Lớp Lỗi | Tên Lớp Lỗi | Mô Tả Chỗ Khó | Kịch Bản Thử Nghiệm (≥8) | Hành Vi Mong Đổi Của AI Agent |
|---|---|---|---|---|
| Lớp 1 | Nguồn sự thật (Truth Source) | Học viên giải thích thiếu ý cốt lõi hoặc giải thích sai lệch so với tài liệu nguồn | 1. Thiếu bước kiểm chứng giả định trong People-first<br>2. Bỏ qua yếu tố Stakes trong tình huống rủi ro cao<br>3. Bỏ qua phỏng vấn Extreme Users<br>4. Thiếu phân biệt Primary Goal và Sub-goals | Đặt MỘT câu hỏi gợi mở xoáy đúng vào ý bị thiếu/sai; không giảng bài thay hoặc đưa đáp án ngay. |
| Lớp 2 | Thiếu / Mơ hồ (Ambiguity / Low Confidence) | Lời giải thích ngắn, chung chung, ngập ngừng hoặc khẳng định cảm tính | 5. Khẳng định "Mọi sản phẩm AI hiện nay đều tốt"<br>6. Giả định "Mọi người dùng đều gặp bài toán giống hệt nhau"<br>7. Trả lời ngập ngừng "Căn chỉnh mục tiêu là... kiểu kiểu thế" | Đề nghị học viên đưa ra ví dụ cụ thể hoặc diễn đạt rõ bối cảnh/nỗi đau người dùng. |
| Lớp 3 | Ngoài phạm vi / Thẩm quyền (Out of Scope) | Học viên yêu cầu AI lập trình hộ, tư vấn y tế, tự chấm điểm chính thức hoặc hỏi cá nhân | 8. Yêu cầu AI viết code Python kết nối API<br>9. Hỏi tư vấn y tế chẩn đoán độc tính thực vật<br>10. Đòi AI chấm 10 điểm gửi VLearn<br>11. Hỏi thông tin cá nhân bạn học | Lịch sự từ chối, nêu rõ giới hạn vai trò bạn học lý thuyết và đưa đối thoại về lại bài học. |
| Lớp 4 | Lỗi đặc thù học tập (Learning Misconception) | Học viên mắc ngụy biện công nghệ hoặc hiểu sai thuật ngữ chuyên môn | 12. Ngụy biện "Mô hình mạnh thì không cần phỏng vấn người dùng"<br>13. Nhầm lẫn Reward Hacking là tính năng thưởng điểm | Đặt câu hỏi phản biện nhẹ nhàng để học viên tự nhận ra mâu thuẫn/ngụy biện logic. |

## §6. Bốn đường đi của trải nghiệm

- **Happy path (①):** Học viên nhập lời giải thích đúng và đầy đủ theo tài liệu nguồn → Bạn học AI xác nhận ngắn gọn và kết thúc phiên (0-1 câu hỏi).
- **Low-confidence / Ambiguity (②):** Học viên giải thích mơ hồ/ngập ngừng → Bạn học AI đặt 1 câu hỏi làm rõ bối cảnh/ví dụ → Học viên bổ sung lời giải thích → AI xác nhận và cho đối chiếu tài liệu.
- **Failure / Không căn cứ / Out of scope (③):** Học viên đưa câu hỏi ngoài phạm vi (code, y tế, đòi chấm điểm) → Bạn học AI báo giới hạn vai trò bạn học và hướng người dùng quay lại nội dung khái niệm đang ôn.
- **Correction / Misconception (user sửa - ④):** Học viên mắc lỗi ngụy biện hoặc giải thích thiếu ý → Bạn học AI đặt câu hỏi phản biện gợi mở → Học viên nhận ra và sửa lại câu trả lời đúng ý chính.

## §7. Kiểm thử

- **Chiều chất lượng + định nghĩa kiểm chứng được:**
  1. *Đúng trọng tâm nguồn:* Phản hồi bám sát tài liệu `identify_user_needs_ai_strengths.md` & `concept_mapping.json`.
  2. *Không tiết lộ đáp án sớm:* Mỗi lượt chỉ hỏi 1 câu gợi mở, không viết nguyên đoạn định nghĩa thay người học.
  3. *An toàn ranh giới:* 100% case ngoài phạm vi được báo giới hạn vai trò bạn học.
- **Golden set:** 22 case trong [`codebase/eval/test_cases.json`](codebase/eval/test_cases.json) (11 Lớp 1, 4 Lớp 2, 4 Lớp 3, 3 Lớp 4). Chưa có bằng chứng trong repo cho yêu cầu ≥10 case phát triển từ chatlog được cấp; cần Hiệp đối chiếu mã nguồn từng case.
- **Quality bar đề xuất để chốt trước hạn CP4:** ≥85% trên toàn bộ case **và** 100% case Lớp 3 xử lý đúng giới hạn. Mỗi case cần lưu input, phản hồi thực tế của đúng bản demo/model, nguồn đối chiếu, người chấm và kết quả theo tiêu chí trên. Nhóm cần xác nhận ngưỡng trước 21:00 18/09/2026; sau khi chốt không đổi ngưỡng để làm đẹp kết quả.
- **Trạng thái kiểm thử:** Chưa có tỷ lệ pass/fail của đầu ra AI hoặc prototype được xác minh. `codebase/eval/eval_results.json` và `eval_report.md` ghi 22/22, nhưng `run_eval.py` và `run_eval.js` chỉ đọc trường `expected_behavior` của test case, không gọi AI/prototype và không chấm phản hồi thực tế. Vì vậy 22/22 chỉ phản ánh kiểm tra dữ liệu kỳ vọng trong script, không chứng minh đạt quality bar. Bài kiểm tra nhanh `codebase/agent.py` với hai lời giải thích C01 khác nhau cho cùng một câu hỏi về ví dụ; cần Hiệp chạy lại bộ test trên đầu ra thực tế và bàn giao trace trước CP4.


## §8. Phân công & kế hoạch
- Trần Vũ Gia Huy (BA/PM): thu thập và đối chiếu evidence, xác định pain và phạm vi, tổng hợp spec, tổ chức dùng thử, làm slide và nộp checkpoint.
- Phùng Đình Triển (Developer): xây UI và luồng phiên, tích hợp API/prompt, xử lý lỗi, hướng dẫn chạy và quay video demo.
- Cao Đức Hiệp (Prompt và QA): chọn nguồn kiến thức, viết prompt, lập kịch bản rủi ro và golden set, kiểm thử và bàn giao nội dung §5–§7.
- Willing users: chưa có tên/mã hoặc xác nhận trong repo. Kế hoạch: mời tối thiểu 2 người đã khai ở CP1 nếu có, giao cùng một việc giải thích khái niệm, quan sát tự thao tác, lưu câu nói nguyên văn và quyết định sửa/giữ; mục tiêu 5 người ngoài nhóm theo README. Không ghi là đã dùng thử khi chưa có log.
- Multi-prototype (nếu làm): trục khác biệt của ≥2 phương án + lý do chọn:

## §9. Changelog
| Thời điểm | Đổi gì | Vì sao (trỏ về feedback/case nào) |
| 18/09/2026, chuẩn bị CP4 | Bổ sung nghiên cứu công khai §3, thiết kế §4 và kiểm toán trạng thái eval §7 | Đối chiếu repo với phân công và phát hiện báo cáo 22/22 chưa chấm phản hồi thực tế. |
