/**
 * BẠN HỌC AI (D3 MVP) — LOGIC VÀ TƯƠNG TÁC GIAO DIỆN (APP.JS)
 * Version 3.2.0 — Independent Topic Chat Sessions per Question
 * Nhóm nonteche402 — Lớp 3B / Phòng E402
 */

const MAX_TURNS = 5;

// SLIDES DATA (4 CONCEPTS, NO TECHNICAL CODE NAMES SHOWN IN UI)
const SLIDES_DATA = [{
    slide_id: 1,
    badge: "📌 People-First vs Technology-First Approach",
    title: "People-First vs Technology-First Approach",
    short_title: "People-First vs Tech-First",
    concept_code: "C01",
    core_points: [
      "Xác định vấn đề & nỗi đau thực tế của người dùng trước khi nghĩ đến AI.",
      "Phát biểu và kiểm chứng giả định về người dùng, bối cảnh và tác động cần giải quyết.",
      "Tech-first (bắt đầu từ khả năng AI) phù hợp khi bạn đã biết rõ bài toán cần giải quyết.",
      "Dùng dữ liệu, phỏng vấn và quan sát hành vi để kết hợp cả hai góc nhìn."
    ],
    limits: [
      "Không coi AI là giải pháp vạn năng cho mọi vấn đề.",
      "Bắt buộc có ví dụ thực tế và phân tích ở các tình huống khác nhau."
    ],
    questions: [{
        id: "q1_1",
        question: "Làm sao để biết người dùng thực sự có nỗi đau (pain point) đó hay chỉ là giả định?",
        prompt: "Làm sao để kiểm chứng xem người dùng thực sự có nỗi đau (pain point) thật sự hay đó chỉ là giả định cảm tính của team phát triển?"
      },
      {
        id: "q1_2",
        question: "Khi nào bạn sẽ ưu tiên chọn tiếp cận Tech-First thay vì People-First?",
        prompt: "Trong tình huống thực tế nào bạn sẽ ưu tiên chọn tiếp cận Tech-First (bắt đầu từ năng lực AI có sẵn) thay vì People-First?"
      }
    ]
  },
  {
    slide_id: 2,
    badge: "📌 Deciding if AI Adds Unique Value & Stakes/Context/Cost",
    title: "Deciding if AI Adds Unique Value & Stakes/Context/Cost",
    short_title: "AI Unique Value & Stakes",
    concept_code: "C02",
    core_points: [
      "Xác định giải pháp có thật sự tạo ra giá trị độc bản nhờ AI hay không.",
      "Đánh giá các yếu tố: Stakes (mức độ rủi ro), User Context (bối cảnh người dùng), Cost of Error (chi phí sai sót).",
      "Tránh tự động hóa các tác vụ có giá trị cao khi người dùng muốn tự mình kiểm soát."
    ],
    limits: [
      "Không tự động hóa hoàn toàn các quyết định rủi ro cao (High-stakes).",
      "Yêu cầu phân tích chi phí sai sót khi AI đưa ra kết quả không chính xác."
    ],
    questions: [{
        id: "q2_1",
        question: "Trong tình huống High-Stakes (rủi ro cao), nếu AI dự đoán sai thì thiệt hại lớn nhất là gì?",
        prompt: "Trong tình huống Rủi ro cao (High stakes), nếu hệ thống AI đưa ra kết quả sai (Cost of Error) thì thiệt hại lớn nhất đối với người dùng là gì?"
      },
      {
        id: "q2_2",
        question: "Có nên tự động hóa hoàn toàn tác vụ quan trọng khi người dùng muốn giữ quyền tự quyết?",
        prompt: "Có nên tự động hóa (automate) hoàn toàn các tác vụ quan trọng khi người dùng muốn giữ quyền kiểm soát tự quyết không?"
      }
    ]
  },
  {
    slide_id: 3,
    badge: "📌 Understanding the Nature of Problem & Identity Dimensions",
    title: "Understanding the Nature of Problem & Identity Dimensions",
    short_title: "Nature of Problem & Identity",
    concept_code: "C03",
    core_points: [
      "Xác minh đúng bài toán bằng cách phỏng vấn Extreme Users (người dùng ở điểm cực đoan).",
      "Đánh giá bài toán theo chiều kích định danh (Identity Dimensions: ngôn ngữ, vùng miền, thu nhập).",
      "Phân biệt giữa Năng lực kỹ thuật của mô hình (Model Utility) và Khả năng dùng thực tế (Usability)."
    ],
    limits: [
      "Không thiết kế cho một nhóm người dùng duy nhất mà bỏ qua tính đa dạng.",
      "Yêu cầu ví dụ thực tế về Extreme Users hoặc chiều kích định danh."
    ],
    questions: [{
        id: "q3_1",
        question: "Phỏng vấn nhóm Extreme Users giúp phát hiện góc khuất nào người dùng trung bình không thấy?",
        prompt: "Phỏng vấn nhóm Extreme Users (người dùng ở điểm cực đoan) giúp ta phát hiện ra những góc khuất hay nhu cầu ẩn nào của bài toán?"
      },
      {
        id: "q3_2",
        question: "Các chiều kích định danh (ngôn ngữ, vùng miền) ảnh hưởng thế nào đến trải nghiệm?",
        prompt: "Các chiều kích định danh (như vùng miền, ngôn ngữ, thu nhập, độ tuổi) ảnh hưởng thế nào đến cách người dùng trải nghiệm sản phẩm AI?"
      }
    ]
  },
  {
    slide_id: 4,
    badge: "📌 Specification Alignment & Problem Framing",
    title: "Specification Alignment & Problem Framing",
    short_title: "Specification Alignment & Framing",
    concept_code: "C04",
    core_points: [
      "Căn chỉnh mô tả mục tiêu (Specification Alignment) để AI làm đúng ý định người dùng.",
      "Phân rã thành Primary Goal (mục tiêu chính) và Sub-goals (mục tiêu phụ).",
      "Xử lý tri thức ngầm định thiếu sót (Underspecification) và phòng ngừa nguy cơ Reward Hacking."
    ],
    limits: [
      "Không để AI tự suy đoán tri thức ngầm định mà không hỏi rõ người dùng.",
      "Cần phân tích rõ nguy cơ Reward Hacking qua ví dụ tình huống."
    ],
    questions: [{
        id: "q4_1",
        question: "Hiện tượng Reward Hacking (tối ưu chỉ số phụ nhưng làm sai mục tiêu chính) xảy ra thế nào?",
        prompt: "Hiện tượng Reward Hacking (AI tối ưu giỏi chỉ số phụ nhưng làm sai mục tiêu chính) thường xảy ra thế nào trong thực tế?"
      },
      {
        id: "q4_2",
        question: "Làm cách nào làm rõ Tri thức ngầm định (Underspecification) người dùng không nói rõ?",
        prompt: "Làm cách nào để đội ngũ phát triển phát hiện và làm rõ Tri thức ngầm định (Underspecification) mà người dùng không thể hiện bằng lời?"
      }
    ]
  }
];

// STATE MANAGEMENT
let state = {
  activeSlideIndex: 0,
  activeQuestionId: null,
  turnCounts: {}, // Keyed by q.id: e.g. turnCounts["q1_1"] = 2
  questionHistories: {}, // Keyed by q.id: e.g. questionHistories["q1_1"] = [...]
  apiKey: localStorage.getItem('gemini_api_key') || '',
  savedExplanations: JSON.parse(localStorage.getItem('saved_explanations') || '[]')
};

// DOM ELEMENTS
const slideBadge = document.getElementById('slide-badge');
const slideContentBody = document.getElementById('slide-content-body');
const slidePrevBtn = document.getElementById('slide-prev');
const slideNextBtn = document.getElementById('slide-next');
const slideDotsContainer = document.getElementById('slide-dots');

const groupedQuestionsContainer = document.getElementById('grouped-questions-container');
const slideConceptsList = document.getElementById('slide-concepts-list');
const chatMessagesEl = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const userInputEl = document.getElementById('user-input');
const btnSend = document.getElementById('btn-send');
const sourceComparisonBar = document.getElementById('source-comparison-bar');

const btnResetSession = document.getElementById('btn-reset-session');
const btnConceptLibrary = document.getElementById('btn-concept-library');
const btnApiConfig = document.getElementById('btn-api-config');

const modalConceptLibrary = document.getElementById('modal-concept-library');
const modalSourceView = document.getElementById('modal-source-view');
const modalApiConfig = document.getElementById('modal-api-config');
const conceptLibraryContent = document.getElementById('concept-library-content');
const sourceViewContent = document.getElementById('source-view-content');

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadSlide(state.activeSlideIndex);
  setupEventListeners();

  if (state.apiKey) {
    document.getElementById('api-key-input').value = state.apiKey;
  }
});

// SLIDE & GROUPED QUESTIONS RENDERERS
function loadSlide(slideIndex) {
  if (slideIndex < 0) slideIndex = SLIDES_DATA.length - 1;
  if (slideIndex >= SLIDES_DATA.length) slideIndex = 0;

  state.activeSlideIndex = slideIndex;
  const slide = SLIDES_DATA[slideIndex];

  // Render slide badge title (Clean human title)
  slideBadge.textContent = slide.badge;

  // Render core points & limits
  slideContentBody.innerHTML = `
    <div class="concept-section-block">
      <h4 style="color:#2563EB; font-size:14px; font-weight:700; margin:4px 0 8px; display:flex; align-items:center; gap:6px;">
        📌 Ý chính cốt lõi:
      </h4>
      <div class="bullet-list-cards">
        ${slide.core_points.map(pt => `<div class="bullet-card blue-border">${pt}</div>`).join('')}
      </div>

      <h4 style="color:#D97706; font-size:14px; font-weight:700; margin:14px 0 8px; display:flex; align-items:center; gap:6px;">
        ⚠️ Điểm giới hạn & Mốc đối chiếu:
      </h4>
      <div class="bullet-list-cards">
        ${slide.limits.map(lm => `<div class="bullet-card amber-border">${lm}</div>`).join('')}
      </div>
    </div>
  `;

  // Update slide dots
  const dots = slideDotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === slideIndex);
  });

  // Update Right Panel Header Text
  if (slideConceptsList) slideConceptsList.textContent = slide.short_title;

  renderGroupedQuestions(slide);

  // Select first question automatically if none active for this slide
  if (slide.questions.length > 0) {
    const firstQ = slide.questions[0];
    selectDebateQuestion(firstQ);
  }
}

function renderGroupedQuestions(slide) {
  groupedQuestionsContainer.innerHTML = '';

  const groupDiv = document.createElement('div');
  groupDiv.className = 'question-group-block';

  groupDiv.innerHTML = `
    <div class="group-header-title">${slide.short_title}</div>
  `;

  slide.questions.forEach((q) => {
    const item = document.createElement('div');
    item.className = `question-link-item ${state.activeQuestionId === q.id ? 'active' : ''}`;
    item.dataset.id = q.id;
    item.innerHTML = `
      <span class="q-icon">🔹</span>
      <span class="q-text">${q.question}</span>
    `;

    item.addEventListener('click', () => {
      selectDebateQuestion(q);
    });

    groupDiv.appendChild(item);
  });

  groupedQuestionsContainer.appendChild(groupDiv);
}

// INDEPENDENT TOPIC CHAT SESSION PER QUESTION
function selectDebateQuestion(q) {
  state.activeQuestionId = q.id;

  // Highlight selected question card
  document.querySelectorAll('.question-link-item').forEach(card => {
    card.classList.toggle('active', card.dataset.id === q.id);
  });

  // Initialize fresh isolated thread for this question if new
  if (!state.questionHistories[q.id]) {
    state.questionHistories[q.id] = [];
    state.turnCounts[q.id] = 0;
  }

  // Clear current chat display area
  chatMessagesEl.innerHTML = '';

  // Render question thread history or start fresh with Minh An asking the question!
  if (state.questionHistories[q.id].length === 0) {
    appendMessageToQuestion(q.id, 'buddy', `💬 **Minh An thắc mắc**: *${q.prompt}*\n\n👉 Bạn nghĩ thế nào về câu hỏi này? Hãy thử tự giải thích hoặc đưa ra ví dụ thực tế cho mình nghe nhé!`);
  } else {
    state.questionHistories[q.id].forEach(msg => renderMessageBubble(msg.role, msg.content));
  }

  // Check turn limits for this specific question
  const turns = state.turnCounts[q.id] || 0;
  if (turns >= MAX_TURNS) {
    sourceComparisonBar.classList.remove('hidden');
    userInputEl.disabled = true;
    btnSend.disabled = true;
    userInputEl.placeholder = `Đã hoàn thành ${MAX_TURNS} lượt học cho câu hỏi này! Reset để thử lại.`;
  } else {
    sourceComparisonBar.classList.add('hidden');
    userInputEl.disabled = false;
    btnSend.disabled = false;
    userInputEl.placeholder = "Nhập câu trả lời hoặc góc nhìn của bạn tại đây...";
    userInputEl.focus();
  }
}

function appendMessageToQuestion(qId, role, text) {
  if (!state.questionHistories[qId]) {
    state.questionHistories[qId] = [];
  }
  state.questionHistories[qId].push({
    role,
    content: text
  });
  renderMessageBubble(role, text);
}

function renderMessageBubble(role, text) {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;

  const avatarSrc = role === 'user' ? 'https://api.dicebear.com/7.x/bottts/svg?seed=Student' : 'assets/avatar.jpg';
  const authorName = role === 'user' ? 'Bạn' : 'Minh An';

  bubble.innerHTML = `
    <img src="${avatarSrc}" alt="${authorName}" class="bubble-avatar">
    <div class="bubble-content">
      <span class="bubble-author">${authorName}</span>
      <div class="bubble-text">${formatMarkdownText(text)}</div>
    </div>
  `;

  chatMessagesEl.appendChild(bubble);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

function formatMarkdownText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

// HELPER: QUALITY VALIDATION & CONTEXT EXTRACTION ENGINE
function isMeaningfulAnswer(text, activeQuestionPrompt) {
  const cleanText = text.trim().toLowerCase();

  // Rule 1: Minimum length requirement
  if (cleanText.length < 10) return false;

  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  if (words.length < 3) return false;

  // Rule 2: Blacklist evasive, off-topic, or generic chitchat
  const evasivePhrases = [
    'chịu', 'hơi khó', 'ko biết', 'không biết', 'chịu thôi', 'chả biết', 'không rõ', 'ko rõ',
    'lên mạng', 'hỏi gg', 'hỏi google', 'abc', 'xyz', 'asd', 'qwe', 'qwerty',
    'chơi thôi', 'cho vui', 'linh tinh', 'hahaha', 'hihi', 'vớ vẩn', 'tùy', 'ko bết', 'k biết',
    'hôm nay đẹp trời', 'ăn cơm chưa', 'bạn bao nhiêu tuổi', 'bạn tên gì', 'hát đi', 'sao cũng được',
    'kệ nó', 'bình thường', 'tùy bạn', 'ai biết được', 'chả quan tâm', 'thời tiết', 'bóng đá',
    'đâu có biết', 'ai mà biết', 'biết chết liền', 'ko quan tâm', 'k quan tâm'
  ];

  for (const pat of evasivePhrases) {
    if (cleanText === pat || (words.length <= 4 && cleanText.includes(pat))) {
      return false;
    }
  }

  // Rule 3: Character repetition noise ("aaaaa", "asdasdasd", "kkkkkk")
  if (/^(.)\1+$/.test(cleanText) || /^([a-z0-9])\1+$/.test(cleanText)) {
    return false;
  }
  if (/(asdf|qwer|zxcv|1234|kkkk|hhhh)/i.test(cleanText) && words.length <= 3) {
    return false;
  }

  // Rule 4: Reasoning or domain relevance indicator check
  const reasoningKeywords = [
    'vì', 'tại', 'do', 'nếu', 'khi', 'bởi', 'như', 'ví dụ', 'sản phẩm', 'app', 'người dùng',
    'vấn đề', 'giải pháp', 'rủi ro', 'mục tiêu', 'dữ liệu', 'kiểm chứng', 'khách hàng',
    'tính năng', 'thực tế', 'ảnh hưởng', 'thiệt hại', 'kết quả', 'đánh giá', 'chọn',
    'thay vì', 'ưu tiên', 'tự động', 'quyền', 'tác vụ', 'extreme', 'vùng miền', 'ngôn ngữ',
    'chỉ số', 'tri thức', 'ngầm định', 'tối ưu', 'ai', 'mô hình', 'bối cảnh', 'hệ thống'
  ];

  const hasReasoningKeyword = reasoningKeywords.some(kw => cleanText.includes(kw));
  if (!hasReasoningKeyword && cleanText.length < 25) {
    return false;
  }

  return true;
}

function extractUserContext(text) {
  const cleanText = text.trim();

  // Pattern 1: Explicit scenario markers (e.g., "ví dụ như app Grab", "khi làm tính năng tự động khóa tài khoản")
  const patternMatch = cleanText.match(/(?:ví dụ|như|với|trong|khi|đối với|sản phẩm|tính năng|app|hệ thống|ứng dụng)\s+([^,.;!?\n]{4,40})/i);
  if (patternMatch && patternMatch[1]) {
    let extracted = patternMatch[1].trim();
    extracted = extracted.replace(/\s+(thì|sẽ|là|nên|có thể|được|nhưng|nếu)$/i, '');
    if (extracted.length >= 4) {
      return extracted;
    }
  }

  // Pattern 2: Known product & industry domain keywords
  const knownDomains = [
    'grab', 'shopee', 'chatgpt', 'canva', 'netflix', 'youtube', 'tiktok', 'facebook',
    'momo', 'zalopay', 'tesla', 'google', 'lazada', 'siri', 'alexa', 'uber',
    'ngân hàng', 'bác sĩ', 'bệnh viện', 'tài xế', 'giáo viên', 'học sinh', 'khách hàng',
    'tự động', 'khóa tài khoản', 'gợi ý', 'dự đoán', 'chẩn đoán', 'thanh toán', 'giao hàng',
    'app', 'website', 'bot', 'chatbot', 'mô hình', 'dữ liệu', 'camera', 'xe tự lái',
    'chuyển tiền', 'đặt xe', 'đặt đồ ăn', 'tư vấn y tế', 'chẩn đoán hình ảnh'
  ];

  const lower = cleanText.toLowerCase();
  const matched = [];

  for (const item of knownDomains) {
    if (lower.includes(item)) {
      matched.push(item);
    }
  }

  if (matched.length > 0) {
    return matched.slice(0, 2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" & ");
  }

  // Fallback: Return first clause if reasonably sized
  const firstClause = cleanText.split(/[,.;?!]/)[0].trim();
  if (firstClause.length >= 8 && firstClause.length <= 40) {
    return firstClause;
  }

  return null;
}

// REAL LLM CALL (GEMINI API) WITH STRICT QUALITY & CONTEXT EVALUATION
async function callRealGeminiApi(userExplanation, slideIndex, currentTurn, questionObj, history) {
  if (!state.apiKey) return null;
  const slide = SLIDES_DATA[slideIndex];
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";

  const historyText = history.map(m => `${m.role === 'user' ? 'Học viên' : 'Minh An'}: ${m.content}`).join('\n');

  const systemInstruction = `Role: Bạn Học AI Minh An (xưng 'mình' - 'bạn').
Lĩnh vực môn học: AI Product Thinking (${slide.badge}).

CÂU HỎI THẢO LUẬN HIỆN TẠI: "${questionObj.prompt}"
BỐI CẢNH SLIDE (${slide.title}):
- Ý chính cốt lõi: ${slide.core_points.join('; ')}
- Điểm giới hạn: ${slide.limits.join('; ')}

LỊCH SỬ CHAT CỦA CHỦ ĐỀ NÀY:
${historyText}

QUY TẮC ĐÁNH GIÁ VÀ HỎI THÊM NGHIÊM NGẶT:
1. ĐÁNH GIÁ CHẤT LƯỢNG CÂU TRẢ LỜI:
   - Nếu câu trả lời của học viên quá ngắn, né tránh (như "không biết", "chịu"), hoặc trả lời linh tinh không liên quan đến câu hỏi "${questionObj.prompt}" (như "hôm nay đẹp trời", "ăn cơm chưa", "abcxyz", "hát đi"):
     -> Bạn BẮT BUỘC chèn từ khóa [INVALID_ANSWER] ở ĐẦU câu trả lời của bạn.
     -> Lịch sự giải thích vì sao chưa chấp nhận và nhắc học viên tập trung trả lời đúng trọng tâm câu hỏi "${questionObj.prompt}".

2. NẾU CÂU TRẢ LỜI HỢP LỆ (BÁM SÁT CÂU HỎI):
   - ĐỪNG DÙNG CÂU HỎI CHUNG CHUNG LẶP LẠI.
   - TRÍCH DẪN CONTEXT CỤ THỂ: Trích dẫn chính xác bối cảnh/ví dụ/sản phẩm/tình huống mà học viên VỪA NÊU trong câu trả lời (in đậm).
   - ĐẶT CÂU HỎI MỚI XOÁY VÀO CONTEXT ĐÓ: Đặt đúng 1 câu hỏi phản biện gợi mở tiếp theo liên quan trực tiếp đến ví dụ/context đó (khai thác khía cạnh Rủi ro High/Low Stakes, Cost of Error, Extreme Users, hoặc Reward Hacking).

Lượt thảo luận hiện tại: ${currentTurn}/${MAX_TURNS}.`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': state.apiKey
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{
            text: systemInstruction
          }]
        },
        contents: [{
          role: 'user',
          parts: [{
            text: `Câu hỏi đang thảo luận: "${questionObj.prompt}"\nCâu trả lời mới từ học viên: "${userExplanation}"`
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 350
        }
      })
    });
    const data = await res.json();
    if (data.candidates && data.candidates.length > 0) {
      let text = data.candidates[0].content.parts[0].text.trim();
      const isInvalid = text.includes('[INVALID_ANSWER]');
      text = text.replace('[INVALID_ANSWER]', '').trim();

      return {
        feedback: `🤖 **[AI Thật - Gemini API]** ${text}`,
        is_real_ai: true,
        is_complete: !isInvalid && currentTurn >= MAX_TURNS,
        isValidTurn: !isInvalid
      };
    }
  } catch (err) {
    console.warn("API lỗi hoặc timeout, fallback sang Smart Engine:", err);
  }
  return null;
}

async function generateAiPeerFeedback(userExplanation, slideIndex, currentTurn, qId, history) {
  const slide = SLIDES_DATA[slideIndex];
  const questionObj = slide.questions.find(q => q.id === qId) || slide.questions[0];

  // 1. Try real Gemini API first if configured
  const realRes = await callRealGeminiApi(userExplanation, slideIndex, currentTurn, questionObj, history);
  if (realRes) return realRes;

  const inputLower = userExplanation.toLowerCase().trim();

  // 2. Out of scope checks (Layer 3)
  if (inputLower.includes('viết code') || inputLower.includes('python') || inputLower.includes('thuốc') || inputLower.includes('y tế') || inputLower.includes('chấm 10 điểm') || inputLower.includes('vlearn') || inputLower.includes('số điện thoại')) {
    if (inputLower.includes('code') || inputLower.includes('python')) {
      return {
        feedback: "Mình là bạn học cùng thảo luận lý thuyết AI Product Thinking thôi nè! Việc viết code chi tiết nằm ngoài phạm vi bài học. Bọn mình cùng ôn tiếp góc nhìn thiết kế nhé?",
        is_real_ai: false,
        is_complete: false,
        isValidTurn: false
      };
    }
    if (inputLower.includes('thuốc') || inputLower.includes('y tế')) {
      return {
        feedback: "Câu hỏi về y tế sức khỏe nằm ngoài phạm vi môn học rồi! Bạn nên tham khảo ý kiến bác sĩ chuyên khoa nhé.",
        is_real_ai: false,
        is_complete: false,
        isValidTurn: false
      };
    }
    if (inputLower.includes('chấm') || inputLower.includes('vlearn')) {
      return {
        feedback: "Mình là bạn học đồng hành thôi nè, không có thẩm quyền chấm điểm hay gửi VLearn đâu!",
        is_real_ai: false,
        is_complete: false,
        isValidTurn: false
      };
    }
  }

  // 3. Strict Quality Check: Is the answer meaningful and relevant to the question?
  if (!isMeaningfulAnswer(userExplanation, questionObj.prompt)) {
    return {
      feedback: `🤔 **Minh An thấy câu trả lời của bạn chưa đi thẳng vào câu hỏi thảo luận hoặc còn quá ngắn nè!**\n\n` +
        `📌 **Câu hỏi hiện tại**: *"${questionObj.prompt}"*\n\n` +
        `👉 Bạn hãy thử đưa ra ý kiến, lập luận hoặc 1 ví dụ thực tế liên quan đến chủ đề **${slide.short_title}** để bọn mình cùng thảo luận tiếp nhé!`,
      is_real_ai: false,
      is_complete: false,
      isValidTurn: false
    };
  }

  // 4. Extract specific context / example dynamically
  const userContext = extractUserContext(userExplanation);
  const contextText = userContext ? `bối cảnh **"${userContext}"**` : "tình huống bạn vừa chia sẻ";

  // 5. Generate question-specific follow-up
  let nextFeedback = "";
  let isComplete = false;

  if (currentTurn >= MAX_TURNS) {
    isComplete = true;
    nextFeedback = `🎉 **XUẤT SẮC TOÀN DIỆN!** Minh An đã cùng bạn hoàn thành ${MAX_TURNS} lượt thảo luận chuyên sâu cho câu hỏi:\n` +
      `*"${questionObj.prompt}"*\n\n` +
      `✅ Phân tích của bạn về ${contextText} rất sắc bén! Bạn hãy nhấn nút **"📖 Đối chiếu nguồn"** để kiểm tra lại bài học nhé!`;
  } else {
    // Tailor follow-up question specifically based on Question ID and extracted user Context!
    switch (qId) {
      case 'q1_1': // Pain point validation
        nextFeedback = `💡 **Ý kiến rất hay từ ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Xoáy sâu vào ví dụ ${contextText}, làm sao đội ngũ phát triển kiểm chứng được người dùng có nỗi đau thật sự chứ không phải chỉ là cảm tính cá nhân của team?`;
        break;
      case 'q1_2': // Tech-First vs People-First
        nextFeedback = `💡 **Góc nhìn rất thực tế về ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Từ ví dụ ${contextText}, điều kiện kỹ thuật hay dữ liệu sẵn có nào sẽ là yếu tố quyết định khiến bạn chọn Tech-First thay vì People-First?`;
        break;
      case 'q2_1': // High stakes & Cost of error
        nextFeedback = `💡 **Phân tích bối cảnh rủi ro rất chuẩn xác về ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Trong ví dụ ${contextText}, nếu AI đưa ra kết quả sai (Cost of Error), chi phí thiệt hại lớn nhất về uy tín hoặc tài chính sẽ được khắc phục như thế nào?`;
        break;
      case 'q2_2': // Full automation vs Human control
        nextFeedback = `💡 **Góc nhìn tương tác người - máy rất sắc bén từ ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Xoáy vào ${contextText}, bạn sẽ thiết kế giao diện thế nào để người dùng vừa được hỗ trợ bởi AI vừa giữ được quyền tự quyết tối cao?`;
        break;
      case 'q3_1': // Extreme Users
        nextFeedback = `💡 **Phân tích góc khuất rất hay từ ví dụ ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Với trường hợp ${contextText}, nhóm người dùng cực đoan (Extreme Users - như người khiếm thị, người cao tuổi) sẽ gặp trở ngại lớn nhất ở khâu nào?`;
        break;
      case 'q3_2': // Identity dimensions
        nextFeedback = `💡 **Góc nhìn đa chiều về chiều kích định danh trong ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Chiều kích định danh nào (ngôn ngữ, vùng miền, thu nhập) ảnh hưởng trực tiếp nhất đến mức độ hài lòng của người dùng trong ${contextText}?`;
        break;
      case 'q4_1': // Reward Hacking
        nextFeedback = `💡 **Phân tích nguy cơ Reward Hacking rất sát thực tế với ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Nếu hệ thống trong ${contextText} cố tình tối ưu chỉ số phụ (ví dụ: lượt nhấp) mà làm sai mục tiêu chính, bạn sẽ đặt ra Guardrail Metric nào để ngăn chặn?`;
        break;
      case 'q4_2': // Underspecification
        nextFeedback = `💡 **Góc nhìn thấu đáo về Tri thức ngầm định trong ${contextText}!**\n\n` +
          `📌 **Hỏi thêm theo bối cảnh**: Để làm rõ tri thức ngầm định (Underspecification) trong ${contextText}, team phát triển nên đặt ra những câu hỏi làm rõ nào trước khi huấn luyện AI?`;
        break;
      default:
        nextFeedback = `💡 **Ý kiến và góc nhìn của bạn về ${contextText} rất thuyết phục!**\n\n` +
          `❓ Xoáy vào phân tích trên, nguyên lý thiết kế cốt lõi nhất bạn rút ra cho sản phẩm AI này là gì?`;
    }
  }

  return {
    feedback: nextFeedback,
    is_real_ai: false,
    is_complete: isComplete,
    isValidTurn: true
  };
}

// EVENT HANDLERS
function setupEventListeners() {
  slidePrevBtn.addEventListener('click', () => loadSlide(state.activeSlideIndex - 1));
  slideNextBtn.addEventListener('click', () => loadSlide(state.activeSlideIndex + 1));

  slideDotsContainer.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => loadSlide(parseInt(e.target.dataset.index)));
  });

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = userInputEl.value.trim();
    if (!text) return;

    const currentQId = state.activeQuestionId;
    if (!currentQId) return;

    appendMessageToQuestion(currentQId, 'user', text);
    userInputEl.value = '';

    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble buddy typing';
    typingBubble.id = 'typing-indicator';
    typingBubble.innerHTML = `
      <img src="assets/avatar.jpg" class="bubble-avatar">
      <div class="bubble-content">
        <span class="bubble-author">Minh An...</span>
        <div class="bubble-text">⏳ <em>Minh An đang suy nghĩ...</em></div>
      </div>
    `;
    chatMessagesEl.appendChild(typingBubble);
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;

    const prevTurns = state.turnCounts[currentQId] || 0;
    const history = state.questionHistories[currentQId] || [];

    setTimeout(async () => {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) indicator.remove();

      const slideIdx = state.activeSlideIndex;
      const response = await generateAiPeerFeedback(text, slideIdx, prevTurns + 1, currentQId, history);

      const feedbackText = response.is_real_ai ?
        response.feedback :
        `🧩 **[Phản hồi quy tắc — không phải AI thật]** ${response.feedback}`;

      appendMessageToQuestion(currentQId, 'buddy', feedbackText);

      if (response.isValidTurn) {
        state.turnCounts[currentQId] = prevTurns + 1;
      }
      const updatedTurns = state.turnCounts[currentQId] || 0;

      if (response.is_complete || updatedTurns >= MAX_TURNS) {
        sourceComparisonBar.classList.remove('hidden');
        userInputEl.disabled = true;
        btnSend.disabled = true;
        userInputEl.placeholder = `Hoàn thành ${MAX_TURNS} lượt thảo luận! Reset để thử lại.`;
        saveExplanationToLibrary(SLIDES_DATA[slideIdx], text, feedbackText);
      }
    }, 850);
  });

  const handleResetSession = () => {
    const currentQId = state.activeQuestionId;
    if (currentQId) {
      state.turnCounts[currentQId] = 0;
      state.questionHistories[currentQId] = [];

      const slide = SLIDES_DATA[state.activeSlideIndex];
      const qObj = slide.questions.find(q => q.id === currentQId);
      if (qObj) {
        selectDebateQuestion(qObj);
      }
    } else {
      loadSlide(state.activeSlideIndex);
    }
  };

  if (btnResetSession) btnResetSession.addEventListener('click', handleResetSession);
  const btnResetChat = document.getElementById('btn-reset-session-chat');
  if (btnResetChat) btnResetChat.addEventListener('click', handleResetSession);

  document.getElementById('btn-view-source-modal').addEventListener('click', () => {
    openSourceModal(state.activeSlideIndex);
  });

  btnConceptLibrary.addEventListener('click', () => {
    openConceptLibraryModal();
  });

  btnApiConfig.addEventListener('click', () => {
    modalApiConfig.classList.remove('hidden');
  });

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      modalConceptLibrary.classList.add('hidden');
      modalSourceView.classList.add('hidden');
      modalApiConfig.classList.add('hidden');
    });
  });

  document.getElementById('btn-save-api-key').addEventListener('click', () => {
    const val = document.getElementById('api-key-input').value.trim();
    state.apiKey = val;
    localStorage.setItem('gemini_api_key', val);
    alert('Đã lưu cấu hình API Key!');
    modalApiConfig.classList.add('hidden');
  });
}

// MODAL RENDERING & STORAGE
function openSourceModal(slideIndex) {
  const slide = SLIDES_DATA[slideIndex];
  sourceViewContent.innerHTML = `
    <div class="source-detail-card">
      <span class="slide-badge">${slide.badge}</span>
      <h3 style="margin: 10px 0;">${slide.title}</h3>
      <div style="background:var(--bg-card-subtle); padding:12px; border-radius:8px; margin-top:10px; border:1px solid var(--border-color);">
        <h4 style="color:var(--primary); font-size:14px;">Ý chính cốt lõi:</h4>
        <ul style="padding-left:16px; margin-top:6px; font-size:13px;">
          ${slide.core_points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  modalSourceView.classList.remove('hidden');
}

function openConceptLibraryModal() {
  conceptLibraryContent.innerHTML = `
    <p class="text-muted" style="margin-bottom:14px;">Kho các Khái niệm AI Product Thinking:</p>
  `;

  SLIDES_DATA.forEach((slide) => {
    const card = document.createElement('div');
    card.className = 'concept-library-card';
    card.style.cssText = 'background:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:10px; padding:14px; margin-bottom:12px;';

    card.innerHTML = `
      <span class="slide-badge">${slide.badge}</span>
      <div style="font-size:13px; color:var(--text-secondary); margin-top:8px;">
        <strong>Ý chính:</strong>
        <ul style="padding-left:16px;">
          ${slide.core_points.slice(0, 2).map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `;
    conceptLibraryContent.appendChild(card);
  });

  modalConceptLibrary.classList.remove('hidden');
}

function saveExplanationToLibrary(slide, explanation, feedback) {
  state.savedExplanations.push({
    slide_id: slide.slide_id,
    timestamp: new Date().toLocaleString('vi-VN'),
    explanation,
    feedback
  });
  localStorage.setItem('saved_explanations', JSON.stringify(state.savedExplanations));
}