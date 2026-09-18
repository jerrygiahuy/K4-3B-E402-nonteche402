# AI SPEC — Học bằng cách dạy · Nhóm nonteche402 · Phòng E402

Hướng: D — Học tập thích ứng & tương tác
Đề: D3 — Học bằng cách dạy
Loại: [ ] Tối ưu tính năng có sẵn  [x] Tính năng mới
Trạng thái: CP4 — đã chốt bản demo chính và quality bar; các mục chưa kiểm chứng được ghi rõ bên dưới

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

- Evidence: Theo số liệu khảo sát 20 người do nhóm trưởng đối chiếu với phản hồi gốc, 19/20 (95%) thường xuyên hoặc thỉnh thoảng gặp khó khăn khi học khái niệm mới; 14/20 (70%) thường xuyên hoặc thỉnh thoảng giải thích lại để tự kiểm tra; 10/20 (50%) lo AI hỏi không đúng trọng tâm. Đây là bằng chứng ban đầu để định hướng D3: bạn học AI đặt câu hỏi cụ thể, bám sát lời giải thích và tài liệu nguồn. Các số liệu này chưa trực tiếp chứng minh hiệu quả của giải pháp.
  Nguồn: số liệu tổng hợp do nhóm trưởng cung cấp và đã đối chiếu với phản hồi gốc. Cần lưu bản xuất phản hồi đã ẩn danh để nhóm truy nguyên số liệu khi cần. Không dùng tỷ lệ khảo sát chung như số riêng của từng ứng viên trong §2.

## §2. Impact & quyết định chọn

### So sánh các phương án trong D3

Khảo sát tổng hợp ở §1 hỏi về vấn đề chung và ý tưởng AI học trò, chưa đo riêng ba phương án dưới đây; các ô “Chờ khảo sát” được giữ nguyên.
Số liệu khảo sát ở §1 cho thấy vấn đề chung khi học khái niệm mới, nhưng chưa chứng minh impact riêng của phương án được chọn.

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
- Non-goals: không luyện bằng giọng nói hoặc avatar tương tác; không nhiều nhân vật mô phỏng; không chấm điểm chính thức hoặc gửi VLearn; không đăng nhập hay tích hợp VLearn; không giảng lại toàn bài.
- Bản demo chính đã chốt: web `codebase/index.html` với tối đa 5 lượt giải thích. Mức nhắm tới là Working, có ít nhất một lời gọi AI thật; thẻ kiến thức và phần đối chiếu nguồn là nội dung biên soạn sẵn. Khi nhập key, bản web thử gọi Gemini; không có key hoặc gọi lỗi thì dùng phản hồi quy tắc đã gắn nhãn riêng. Bản Streamlit `codebase/app.py` (2 lượt) không dùng để đo hoặc demo CP4. Bản web hiện đi theo chuỗi câu hỏi định sẵn và chưa chứng minh chọn đúng một điểm thiếu từ nguồn hoặc dừng sớm khi đã đủ ý; cần kiểm thử và chỉnh trước khi khẳng định đạt lát cắt mục tiêu.
- Video tham chiếu: [luồng prototype CP2](https://drive.google.com/file/d/1I0A3aqYq2b-DOlYymKcN5ukSJNM7rZzV/view?usp=share_link) và [thao tác CP3](https://drive.google.com/file/d/1xoo4eIkc1Bh76xgtwR7V0_t-FGsvvhZZ/view?usp=sharing). Video CP3 cho thấy tương tác trên bản web nhưng phản hồi quan sát được giống nhánh quy tắc; chưa chứng minh lời gọi AI thật. Chưa kiểm tra quyền xem của người ngoài đối với hai link Drive.
- Automation: [x] augment [ ] conditional [ ] automate. AI chỉ gợi một câu hỏi; học viên quyết định sửa lời giải thích và tự xem nguồn. Câu hỏi sai có thể khiến học viên ôn lệch, nên không tự chấm điểm hay xác nhận đã hiểu chỉ vì đủ số lượt.

### §4b. Nguyên tắc thiết kế HAX/PAIR

| Nguyên tắc | Áp cụ thể vào prototype | Trạng thái kiểm tra |
|---|---|---|
| [HAX G1 — Nói rõ hệ thống làm gì](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-what-the-system-can-do/) | Banner và lời chào trong `codebase/index.html`, `codebase/app.js` nêu việc giải thích khái niệm và hỏi lại. | Đã có trong mã; cần xem trên trình duyệt và thử với người dùng. |
| [HAX G2 — Nói rõ giới hạn độ tin cậy](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-how-well-the-system-can-do-what-it-can-do/) | Phản hồi quy tắc được gắn nhãn riêng; phản hồi Gemini có nhãn AI thật. | Đã sửa trong `codebase/app.js`; cần kiểm tra lại trên trình duyệt. Chưa có cảnh báo khi nguồn không đủ chắc. |
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

Các đường đi trên là hành vi mục tiêu. Bản web 5 lượt hiện chưa có bằng chứng dừng sớm ở happy path, chọn đúng điểm thiếu theo nguồn hoặc xử lý đủ các nhánh lỗi; cần kiểm thử trên output thực tế trước khi đánh dấu đã đạt.

## §7. Kiểm thử

- **Chiều chất lượng + định nghĩa kiểm chứng được:**
  1. *Đúng trọng tâm nguồn:* Phản hồi bám sát tài liệu `identify_user_needs_ai_strengths.md` & `concept_mapping.json`.
  2. *Không tiết lộ đáp án sớm:* Mỗi lượt chỉ hỏi 1 câu gợi mở, không viết nguyên đoạn định nghĩa thay người học.
  3. *An toàn ranh giới:* 100% case ngoài phạm vi được báo giới hạn vai trò bạn học.
- **Golden set:** 22 case trong [`eval/test_cases.json`](eval/test_cases.json) (11 Lớp 1, 4 Lớp 2, 4 Lớp 3, 3 Lớp 4). Chưa có bằng chứng trong repo cho yêu cầu ≥10 case phát triển từ chatlog được cấp; cần Hiệp đối chiếu mã nguồn từng case.
- **Quality bar CP4 đã chốt bởi nhóm trưởng lúc 18:53 ngày 18/09/2026:** ≥85% trên toàn bộ 22 case (**ít nhất 19/22**) **và** 100% case Lớp 3 (**4/4**) xử lý đúng giới hạn. Đo trên phản hồi thực tế của bản web 5 lượt với cấu hình/model ghi rõ; mỗi case lưu input, output, nguồn đối chiếu, người chấm và pass/fail theo tiêu chí của case. Hai điều kiện phải cùng đạt. Giữ nguyên ngưỡng này trong các lượt chạy sau.
- **Trạng thái kiểm thử:** Chưa có tỷ lệ pass/fail của đầu ra AI hoặc prototype được xác minh. `codebase/eval/eval_results.json` và `eval_report.md` ghi 22/22, nhưng `run_eval.py` và `run_eval.js` chỉ đọc trường `expected_behavior` của test case, không gọi AI/prototype và không chấm phản hồi thực tế. Vì vậy 22/22 chỉ phản ánh kiểm tra dữ liệu kỳ vọng trong script, không chứng minh đạt quality bar. Bài kiểm tra nhanh `codebase/agent.py` với hai lời giải thích C01 khác nhau cho cùng một câu hỏi về ví dụ; cần Hiệp chạy lại bộ test trên đầu ra thực tế và bàn giao trace trước CP4.


## §8. Phân công & kế hoạch
- Trần Vũ Gia Huy (BA/PM): thu thập và đối chiếu evidence, xác định pain và phạm vi, tổng hợp spec, tổ chức dùng thử, làm slide và nộp checkpoint.
- Phùng Đình Triển (Developer): xây UI và luồng phiên, tích hợp API/prompt, xử lý lỗi, hướng dẫn chạy và quay video demo.
- Cao Đức Hiệp (Prompt và QA): chọn nguồn kiến thức, viết prompt, lập kịch bản rủi ro và golden set, kiểm thử và bàn giao nội dung §5–§7.
- Người dùng thử: nhóm trưởng xác nhận Nguyễn Quang Đạo (U01) và Ngô Thế Việt (U02) đã trực tiếp thử prototype và đồng ý công khai tên. Ghi chép thao tác và câu trả lời chưa được bàn giao nên chưa có kết quả validation trong repo; chưa xác nhận hai người này có thuộc danh sách willing users đã khai ở CP1 hay không. Mục tiêu theo README là 5 người ngoài nhóm. Khi nhận log, bổ sung task, quan sát, quote nguyên văn và quyết định sửa/giữ; chưa kết luận hiệu quả từ việc đã thử đơn thuần.
- Multi-prototype (nếu làm): trục khác biệt của ≥2 phương án + lý do chọn:

## §9. Changelog
| Thời điểm | Đổi gì | Vì sao (trỏ về feedback/case nào) |
| 18/09/2026, chuẩn bị CP4 | Bổ sung nghiên cứu công khai §3, thiết kế §4 và kiểm toán trạng thái eval §7 | Đối chiếu repo với phân công và phát hiện báo cáo 22/22 chưa chấm phản hồi thực tế. |
| 18/09/2026, 18:53 | Nhóm trưởng chốt bản web 5 lượt và quality bar ≥85% toàn bộ, 100% Lớp 3 | Quyết định CP4; ngưỡng được khóa trước khi có kết quả eval thực tế được xác minh. |
| 18/09/2026, cập nhật khảo sát | Cập nhật số liệu 20 người do nhóm trưởng đối chiếu với phản hồi gốc | Ghi rõ nguồn số liệu và giới hạn suy luận về hiệu quả giải pháp. |
