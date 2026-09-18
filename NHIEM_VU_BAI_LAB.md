# NHIỆM VỤ BÀI LAB — NHÓM nonteche402

**Đề tài:** D3 — Học bằng cách dạy · Bạn học AI — Giải thích để hiểu  
**Lớp/phòng:** 3B / E402 · **Ngày lập:** 18/09/2026  
**Nhóm trưởng:** Trần Vũ Gia Huy  
**Thành viên:** Cao Đức Hiệp, Phùng Đình Triển

> Đây là kế hoạch giao việc, không phải báo cáo những việc đã hoàn thành. Các ô chỉ được đánh dấu khi có đầu ra thực tế. Thời gian dưới đây theo giờ Việt Nam. Các giờ bàn giao nội bộ là đề xuất để nhóm có thời gian kiểm tra trước hạn BTC.

## 1. Mục tiêu chung và phạm vi

Xây prototype cho học viên giải thích một khái niệm bằng văn bản cho AI đóng vai bạn học. AI chọn một điểm thiếu hoặc mơ hồ so với tài liệu để hỏi lại; học viên sửa lời giải thích và xem đối chiếu nguồn.

**Luồng chung:** Chọn khái niệm → nhập lời giải thích → AI hỏi lại → học viên sửa → đối chiếu tài liệu.

- Bắt đầu với 1–2 khái niệm có tài liệu nguồn đã kiểm tra.
- Mỗi lượt hỏi một câu; dự kiến tối đa hai lượt, có thể kết thúc sớm.
- AI không cố bắt lỗi khi lời giải thích đã đúng và đủ trong phạm vi.
- Thiếu thông tin thì hỏi rõ; thiếu căn cứ thì báo giới hạn.
- Không làm voice, avatar, nhiều nhân vật, đăng nhập hay tích hợp VLearn trong bản đầu.
- Không tự chấm điểm học tập chính thức hoặc gửi hội thoại cho giảng viên.
- Cần đối chiếu thêm file chi tiết Track D/D3 của BTC; Huy phụ trách lấy và ghi nhận yêu cầu bổ sung trước khi chốt phạm vi.

## 2. Ai chịu trách nhiệm phần nào?

| Người | Trách nhiệm chính | Nơi bàn giao |
|---|---|---|
| Trần Vũ Gia Huy | BA/PM: evidence, pain, phạm vi, thiết kế yêu cầu, tổng hợp spec, dùng thử, slide, checkpoint | README.md, TEAMMATES.md, spec.md, evidence/, validation/, demo-slides.pdf |
| Phùng Đình Triển | Developer: UI, trạng thái phiên, API, xử lý lỗi, tích hợp prompt, hướng dẫn chạy, video | codebase/, video CP3 và CP5 qua kênh BTC yêu cầu |
| Cao Đức Hiệp | Prompt và QA: nguồn kiến thức, prompt, kịch bản rủi ro, bộ test, tiêu chí chấm, báo cáo kết quả | codebase/prompts/ (thống nhất với Triển), eval/, nội dung §5–§7 gửi Huy |
| Cả ba | Thống nhất thiết kế, chấm thử output, chạy demo, reflection cá nhân, nộp VLearn | reflection/huy.md, reflection/trien.md, reflection/hiep.md |

**Nguyên tắc:** Huy tổng hợp spec, không tự viết thay các kết quả kỹ thuật. Hiệp bàn giao prompt cho Triển; Triển bàn giao bản chạy được cho Hiệp và Huy.

## 3. Huy — việc cần thực hiện

### H1. Xác nhận yêu cầu và việc nộp

- [ ] Kiểm tra xác nhận đã gửi CP1 và CP2; ghi nhận đúng trạng thái, không tự coi đã nộp.
- [ ] Đọc yêu cầu chi tiết D3 và so với phạm vi ở mục 1; giải quyết điểm lệch với nhóm/TA.
- [ ] Xác nhận Hiệp và Triển đã nhận lời mời collaborator và clone repo chung.
- [ ] Cập nhật tên, vai trò trong README và TEAMMATES; thông tin định danh riêng cung cấp theo kênh BTC chấp thuận.
- [ ] Nhắc cả ba tự nộp cùng link repo trên VLearn.

### H2. Evidence và quyết định sản phẩm

- [ ] Xuất câu hỏi và phản hồi gốc; đối chiếu số liệu tổng hợp đang ghi trong spec.
- [ ] Lưu nguồn gốc rõ ràng: số liệu người dùng cung cấp khác với số liệu đã đối chiếu log. Dữ liệu mô phỏng có nhãn riêng, không cộng vào mẫu khảo sát thực tế.
- [ ] Với khảo sát không thu tên, dùng mã phản hồi R01…; ghi cách tuyển mẫu và giới hạn kiểm tra trùng/người ngoài nhóm.
- [ ] Hoàn thiện §1: người dùng, workflow, job, pain, evidence.
- [ ] Hoàn thiện §2: ít nhất 3 ứng viên, số người gặp, tần suất, hậu quả, tính khả thi và lý do chọn/loại. Thiếu số liệu thì ghi thiếu, không phân bổ số tổng cho từng ứng viên.
- [ ] Hoàn thiện §3: quan sát thực tế giải pháp tương tự, điều học/né và điểm khác của nhóm; không ghi trải nghiệm chưa thực hiện.

**Đạt khi:** người khác kiểm tra được nguồn số liệu; pain không bị nhầm với mức độ thích ý tưởng; phương án chọn có lý do và giới hạn rõ.

### H3. Thiết kế, dùng thử và tổng hợp

- [ ] Hoàn thiện §4 cùng hai bạn: lát cắt, ≥3 non-goals, automation, mức prototype; ≥4 nguyên tắc HAX/PAIR trỏ vào vị trí UI, có G10.
- [ ] Thử flow của Triển và ghi lỗi bằng bước tái hiện cụ thể.
- [ ] Mời 5 người ngoài nhóm dùng thử để đáp ứng mức yêu cầu cao hơn trong README; giữ liên hệ với ít nhất 2 người khai ở CP1 nếu đã có.
- [ ] Giao task, quan sát tự thao tác, ghi quote thật và quyết định sửa/giữ trong validation/.
- [ ] Nhận nội dung §5–§7 từ Hiệp và thông tin triển khai từ Triển, tổng hợp §8–§9.
- [ ] Làm 6 slide: user/job; chọn bài toán; giải pháp/demo; kết quả vs ngưỡng; phản hồi người dùng; ưu tiên tiếp theo.
- [ ] Xuất demo-slides.pdf, kiểm tra video dự phòng và nộp checkpoint.

**Đầu ra cá nhân cuối:** evidence, spec tổng hợp, log validation, slide, reflection/huy.md.

## 4. Triển — việc cần thực hiện

### T1. Dựng và thống nhất luồng

- [ ] Thống nhất với Hiệp đầu vào/đầu ra AI trước khi nối API (mục 6).
- [ ] Dựng chọn khái niệm, nhập giải thích, xem câu hỏi, sửa câu trả lời và đối chiếu nguồn.
- [ ] Hiển thị đang tải, lỗi API, thử lại, kết thúc sớm; giữ nội dung người dùng khi lỗi.
- [ ] Có đường đi thành công, không chắc, thất bại và sửa câu trả lời.
- [ ] Đánh dấu rõ phần mock, không hiển thị kết quả giả như AI thật.

### T2. Tích hợp và bàn giao

- [ ] Nối ≥1 lời gọi AI thật ở quyết định chọn câu hỏi; tích hợp prompt của Hiệp.
- [ ] Giới hạn lượt và kiểm tra đầu ra; mã nguồn trích dẫn phải thuộc nguồn được cung cấp.
- [ ] Ghi trace phù hợp để chứng minh AI chạy; không ghi key hoặc công khai dữ liệu bị hạn chế.
- [ ] Tạo hướng dẫn chạy có lệnh cụ thể, dependency, biến môi trường và một input thử.
- [ ] Cung cấp .env.example chỉ có giá trị mẫu; .gitignore loại .env, key và data pack.
- [ ] Cho Hiệp chạy bộ test và cho Huy dùng thử; sửa lỗi được ưu tiên.
- [ ] Quay video CP3 khoảng 30 giây có thao tác và AI thật.
- [ ] Quay video CP5 đúng phần demo dự phòng, gồm case thường và case khó.

**Đạt khi:** người khác chạy được theo hướng dẫn, hoàn thành một phiên mà không cần sửa dữ liệu bằng tay giữa chừng; lỗi có đường xử lý rõ.

**Đầu ra cá nhân cuối:** codebase, hướng dẫn chạy, cấu hình mẫu, trace phù hợp, video, reflection/trien.md.

## 5. Hiệp — việc cần thực hiện

### P1. Nguồn, prompt và hành vi AI

- [ ] Chọn 1–2 khái niệm có nguồn trong tài liệu được phép; kiểm tra các ý chính và mã đoạn.
- [ ] Viết prompt vai bạn học: mỗi lượt hỏi một điểm cụ thể, không giảng thay ngay, không cố tìm lỗi khi giải thích đúng.
- [ ] Định nghĩa hành vi khi input mơ hồ, sai kiến thức, đủ ý, không có nguồn hoặc ngoài phạm vi.
- [ ] Thử ít nhất 5 input với Triển trước khi mở rộng; bàn giao prompt có phiên bản.
- [ ] Viết ≥8 kịch bản, phủ 4 lớp: nguồn sự thật; thiếu/mơ hồ; ngoài phạm vi/thẩm quyền; lỗi đặc thù học tập.

### P2. Kiểm thử và phân tích

- [ ] Tạo golden set ≥20 case; phương án 22 case: 10 thường + 8 khó (2/lớp) + 4 hiếm.
- [ ] ≥10 case lấy/phát triển từ chatlog thật được cấp, có tham chiếu nguồn; giữ riêng nội dung bị hạn chế, không đẩy nguyên pack lên Public.
- [ ] Mỗi case có ID, input/ngữ cảnh, nguồn, lớp lỗi, hành vi mong đợi và tiêu chí pass/fail.
- [ ] Chốt định nghĩa: đúng trọng tâm, đúng nguồn, không tiết lộ đáp án sớm, xử lý giới hạn.
- [ ] Chấm độc lập 5 output cùng Huy, sửa tiêu chí nếu hiểu khác nhau.
- [ ] Đề xuất ngưỡng đạt bằng số; nhóm thống nhất và khóa trong spec trước CP4. Không thay ngưỡng sau khóa để làm đẹp kết quả.
- [ ] Chạy trọn bộ, lưu cả output đạt và lỗi, tính tỷ lệ đạt, phân tích nguyên nhân.
- [ ] Sau sửa prompt/code, chạy lại trọn bộ và giữ kết quả từng lượt.
- [ ] Bàn giao §5–§7, số liệu cho slide và case khó cho demo.

**Đạt khi:** người khác có thể chấm theo cùng tiêu chí; bảng chạy đủ mọi case; kết quả thấp vẫn báo trung thực. Chưa có chatlog phải báo Huy xử lý ngay.

**Đầu ra cá nhân cuối:** prompt, bộ test, các lượt kết quả, rủi ro/quality bar, reflection/hiep.md.

## 6. Điểm bàn giao giữa Hiệp và Triển

Trong 15 phút làm việc đầu tiên, hai bạn thống nhất và ghi lại:

| Hạng mục | Nội dung cần chốt |
|---|---|
| Input | ID khái niệm, đoạn tài liệu/mã nguồn, lời giải thích, lịch sử phiên, số lượt |
| Output | Trạng thái, đoạn lời giải thích đang xét, một câu hỏi, mã nguồn; khi kết thúc có nội dung đối chiếu |
| Trạng thái | Hỏi làm rõ; hỏi vào kiến thức; đủ trong phạm vi; thiếu căn cứ/ngoài phạm vi |
| Prompt | Hiệp quản lý nội dung; Triển nạp vào ứng dụng ở đường dẫn đã thống nhất |
| Lỗi hệ thống | Triển xử lý timeout/đầu ra sai định dạng; không biến lỗi API thành nhận xét kiến thức |
| Chạy eval | Hiệp nhận một cách chạy lặp lại cùng tập input; nếu chấm tay thì lưu đầy đủ output |

Đây là hợp đồng dự kiến, không bắt buộc dùng một framework hay model cụ thể. Ghi rõ model/cấu hình thực sự dùng trong từng lượt kiểm thử.

## 7. Hạn bàn giao và người nộp

| Mốc | Bàn giao nội bộ đề xuất | Hạn BTC | Huy nhận gì để nộp? |
|---|---|---|---|
| CP1 | Kiểm tra trạng thái hiện tại | 19:30, 17/09 | Canvas, evidence đầu, thông tin đội trưởng/repo/người thử |
| CP2 | Kiểm tra trạng thái hiện tại | 21:00, 17/09 | Flow prototype bấm được; nếu thiếu thì hoàn thiện ngay và báo TA |
| CP3 | 14:30, 18/09 | 16:00, 18/09 | Triển: video 30 giây và AI thật; Hiệp: ≥20 case, bảng kết quả lượt 1 có % |
| CP4 | 19:30, 18/09 | 21:00, 18/09 | Spec gần cuối, evidence, rủi ro, quality bar, phần còn thiếu |
| CP5 | 21:30, 18/09 | 22:30, 18/09 | Slide PDF, video dự phòng, kết quả/validation/reflection hoàn thiện; dry run |
| CP6 | Sẵn sàng trước giờ thi | 09:00, 19/09 | Thuyết trình và hỏi đáp, không nộp thêm |

Nếu một giờ bàn giao nội bộ đã qua, báo phần còn thiếu ngay và ưu tiên mốc kế tiếp; không coi việc bổ sung muộn là đã nộp đúng hạn.

**Dùng thử nên bắt đầu ngay khi flow ổn, không chờ CP4. Sau CP4 không thêm tính năng mới.**

## 8. Quy trình Git và báo tiến độ

- Huy: nhánh tài liệu riêng nếu cần; Hiệp: hiep/prompt-eval; Triển: trien/prototype.
- Hiệp và Triển tự tạo nhánh trên máy, commit việc thực tế, push và tạo Pull Request vào main.
- Huy review nội dung và merge trước mốc nộp. Không force push main.
- Một người tổng hợp spec.md (Huy); các bạn gửi phần mình và bằng chứng để tránh cùng sửa một mục.
- Không commit key/.env, nguyên data pack, thông tin nhận diện khảo sát hoặc người dùng thử chưa được phép công khai.
- Người dùng thử dùng mã U01… trong bản công khai; danh tính và xác nhận thật cung cấp riêng theo yêu cầu BTC.
- Mỗi người báo khi xong đầu ra hoặc khi bị kẹt quá 20 phút, kèm: đã làm gì / link commit hoặc PR / đang kẹt gì / cần ai hỗ trợ / giờ dự kiến xong.

**Phân biệt trạng thái:** Chưa bắt đầu → Đang làm → Chờ review → Hoàn thành. Chỉ Hoàn thành khi file đã có trên main và người nhận đã kiểm tra.

## 9. Checklist trước nộp cuối

- [ ] README: thành viên và phân công; spec: đủ §1–§9, khớp bản build.
- [ ] codebase: chạy được, có AI thật, mock được khai rõ, không lộ key.
- [ ] eval: ≥20 case đúng cơ cấu, ≥10 case phát triển từ chatlog, kết quả đủ case, % và nguyên nhân lỗi.
- [ ] validation: task, quan sát, quote thật, quyết định sửa/giữ; thay đổi ghi trong §9.
- [ ] demo-slides.pdf: đúng 6 trang; số liệu có nguồn, không dùng số giả làm kết quả thật.
- [ ] Video dự phòng mở được; nhóm đã chạy thử bài trình bày và bấm giờ.
- [ ] reflection/: mỗi người một file, có việc đã làm và bài học từ lỗi thực tế.
- [ ] Tất cả đầu ra cần chấm đã vào main; repo mở được ở cửa sổ ẩn danh.
- [ ] Huy nộp form CP1–CP5 bằng cùng mã học viên; giữ xác nhận nộp.
- [ ] Cả ba tự nộp cùng link repo lên VLearn, không nhờ đội trưởng nộp thay.

## 10. Phần nói khi trình bày

| Người | Phần chịu trách nhiệm giải thích |
|---|---|
| Huy | Người dùng/pain, evidence, vì sao chọn giải pháp, phản hồi dùng thử và ưu tiên tiếp theo |
| Triển | Demo luồng chính và case khó, phần thật/mock, xử lý lỗi hệ thống |
| Hiệp | AI chọn câu hỏi thế nào, nguồn kiến thức, golden set, % đạt so với ngưỡng và lỗi còn tồn tại |

Cả ba phải trả lời được: vì sao chọn augment; lỗi nguy hiểm nhất; phần mình làm hoạt động thế nào. Thời lượng vòng thi theo thông báo hiện hành tại phòng E402.

## 11. Căn cứ và điểm cần xác nhận

Kế hoạch dựa trên README lớp 3B, challenge brief, guide, rubric, template spec và ảnh hướng dẫn nộp của BTC đã được cung cấp. Các đường dẫn evidence/ và codebase/prompts/ là đề xuất tổ chức của nhóm.

- README yêu cầu 5 người dùng thử, rubric ghi ≥2: kế hoạch đặt mục tiêu 5 để đáp ứng cả hai.
- Ảnh hướng dẫn nộp xác nhận đội trưởng nộp form checkpoint; mọi thành viên tự nộp repo lên VLearn.
- File chi tiết Track D/D3 chưa được cung cấp trong cuộc trao đổi; cần kiểm tra để không bỏ sót hard tests/deliverable riêng.
- Đây là phân công, không xác nhận trạng thái nộp checkpoint hoặc tiến độ code hiện tại.
