# Thư Mục Quản Lý Prompt (Prompt Versioning Registry)

> **Dự án:** D3 — Học bằng cách dạy · Bạn Học AI  
> **Người quản lý:** Cao Đức Hiệp (Prompt & QA)

---

## 1. Cấu Trúc Thư Mục

```text
codebase/prompts/
├── README.md               <-- File hướng dẫn & Nhật ký phiên bản
├── v1/                     <-- Phiên bản Baseline (v1.2.0 - 2 lượt)
│   ├── system/
│   │   └── persona_buddy.md
│   └── tasks/
│       ├── check_clarity.md
│       └── compare_doc.md
└── v2/                     <-- Phiên bản Nâng cao (v2.0.0 - 5-6 lượt & ví dụ thực tế)
    ├── system/
    │   └── persona_buddy.md
    └── tasks/
        ├── check_clarity.md
        └── compare_doc.md
```

---

## 2. Nhật Ký Phiên Bản (Version History)

### 📌 Phiên bản v1.2.0 (`codebase/prompts/v1/`)
- **Mục tiêu:** Mức prototype MVP ban đầu.
- **Giới hạn:** Tối đa 2 lượt tương tác.
- **Hành vi:** Kiểm tra xem lời giải thích của học viên có nêu đủ ý cốt lõi không. Nếu đủ ý thì xác nhận và dừng lại; nếu thiếu thì hỏi 1 câu gợi mở.

### 🚀 Phiên bản v2.0.0 (`codebase/prompts/v2/`) — *(Đang sử dụng chính thức)*
- **Mục tiêu:** Đáp ứng tiêu chí chất lượng cao (High Quality Bar).
- **Giới hạn:** Mở rộng thành **5 đến 6 lượt tương tác**.
- **Yêu cầu nâng cao:**
  1. **Ví dụ thực tế (Real-world Examples):** Bắt buộc học viên đưa ra ví dụ sản phẩm/ứng dụng thực tế.
  2. **Đa khía cạnh tình huống (Situational Analysis):** Phân tích khái niệm qua 5 khía cạnh (Định nghĩa & Ví dụ, High/Low Stakes & Context, Extreme Users & Identity, Underspecification & Reward Hacking, Bài học thiết kế).
- **Quy tắc bảo tồn:** Các nội dung cũ của v1 được lưu giữ dưới dạng comment trong file `v2/system/persona_buddy.md` và bảo toàn nguyên vẹn trong thư mục `v1/`.
