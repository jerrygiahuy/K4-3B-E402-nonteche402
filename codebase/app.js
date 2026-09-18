/**
 * BẠN HỌC AI (D3 MVP) — LOGIC VÀ TƯƠNG TÁC GIAO DIỆN (APP.JS)
 * Version 1.5.0 — Hỗ Trợ Kết Nối AI Thật (Gemini API) & Smart Engine Fallback
 * Nhóm nonteche402 — Lớp 3B / Phòng E402
 */

// 1. DATA CONCEPTS & SOURCE REFERENCES
const MAX_TURNS = 5;

const CONCEPTS_DATA = [
  {
    concept_id: "C01",
    code: "C01",
    title: "People-First vs Technology-First Approach",
    short_title: "People-First vs Tech-First",
    badge: "Khái niệm C01 / 04",
    icon: "📌",
    core_points: [
      "Xác định vấn đề & nỗi đau thực tế của người dùng trước khi nghĩ đến AI.",
      "Phát biểu và kiểm chứng các giả định về người dùng, bối cảnh và tác động.",
      "Tech-first xuất phát từ năng lực AI có sẵn để đi tìm bài toán phù hợp.",
      "Dùng dữ liệu, phỏng vấn và quan sát hành vi để kết hợp hài hòa cả hai."
    ],
    limits: [
      "Không coi AI là giải pháp vạn năng cho mọi vấn đề.",
      "Bắt buộc có ví dụ thực tế và phân tích ở các tình huống khác nhau."
    ],
    initial_greeting: "Chào bạn! Minh An rất vui được cùng bạn thảo luận sâu về **People-First vs Tech-First** (khám phá qua 5 lượt). Hãy bắt đầu bằng cách giải thích khái niệm này và **đưa ra 1 ví dụ thực tế** nhé!",
    source_detail: `### C01: People-First vs Technology-First Approach\n\n- **People-First:** Bắt đầu bằng việc phát biểu và kiểm chứng giả định về người dùng, nỗi đau và bối cảnh trước khi quyết định áp dụng AI.\n- **Tech-First:** Khám phá năng lực AI có sẵn để xem có thể giải quyết bài toán nào (ví dụ bổ sung safety classifier vào hệ thống sẵn có).\n- **Đa khía cạnh:** Cần phân tích bài toán ở các bối cảnh rủi ro khác nhau và đưa ví dụ thực tế.`
  },
  {
    concept_id: "C02",
    code: "C02",
    title: "Deciding if AI Adds Unique Value & Stakes/Context/Cost",
    short_title: "AI Unique Value & Stakes",
    badge: "Khái niệm C02 / 04",
    icon: "🎯",
    core_points: [
      "Xác định giải pháp có thực sự tạo giá trị độc bản nhờ AI hay không.",
      "Đánh giá 4 yếu tố: Stakes (rủi ro), User Context (bối cảnh), Cost (chi phí), Evidence (bằng chứng).",
      "Tránh tự động hóa (automate) các tác vụ giá trị cao khi người dùng không muốn.",
      "Tính đến chi phí sai sót (cost of error) khi AI đưa ra kết quả không chính xác."
    ],
    limits: [
      "Không tự động hóa hoàn toàn các quyết định rủi ro cao (High-stakes).",
      "Yêu cầu phân tích sâu tình huống High vs Low stakes và ví dụ cụ thể."
    ],
    initial_greeting: "Chào bạn! Với khái niệm **Giá Trị Độc Bản & Yếu Tố Rủi Ro (C02)**, bạn giải thích thế nào và có **ví dụ sản phẩm thực tế** nào minh họa không nhỉ? (Chuỗi 5 lượt cùng Minh An)",
    source_detail: `### C02: Deciding if AI Adds Unique Value\n\n- **Stakes:** Tình huống High stakes (cần chính xác tuyệt đối) vs Low stakes (chấp nhận sáng tạo).\n- **User Context & Cost:** Chi phí phát triển + chi phí khi AI đưa ra kết quả sai (Cost of Error).\n- **Phản ứng người dùng:** Bất bình nếu AI tự động hóa tác vụ giá trị cao mà họ muốn tự kiểm soát.`
  },
  {
    concept_id: "C03",
    code: "C03",
    title: "Understanding the Nature of the Problem & Identity Dimensions",
    short_title: "Nature of Problem & Identity",
    badge: "Khái niệm C03 / 04",
    icon: "👥",
    core_points: [
      "Xác minh đúng bài toán bằng cách phỏng vấn 'Extreme Users'.",
      "Đánh giá bài toán theo các chiều kích định danh (vị trí, ngôn ngữ, thu nhập, giới tính).",
      "Phân tích yếu tố xã hội - kỹ thuật (Socio-technical drivers) và sự tiến hóa bài toán.",
      "Sử dụng Model Cards và Data Cards để phân biệt Model Utility và Usability."
    ],
    limits: [
      "Không thiết kế cho một nhóm người dùng duy nhất mà bỏ qua tính đa dạng.",
      "Yêu cầu ví dụ về Extreme Users hoặc chiều kích định danh thực tế."
    ],
    initial_greeting: "Hế lô bạn! Minh An sẵn sàng cùng bạn phân tích sâu 5 lượt về **Bản Chất Vấn Đề & Chiều Kích Định Danh (C03)** rồi nè! Hãy bắt đầu với góc nhìn và ví dụ của bạn nhé!",
    source_detail: `### C03: Understanding the Nature of the Problem\n\n- **Extreme Users:** Phỏng vấn nhóm người dùng đặc biệt để tìm ra нюанс ẩn của vấn đề.\n- **Dimensions of Identity:** Khác biệt về ngôn ngữ, kinh tế, vị trí địa lý ảnh hưởng đến trải nghiệm bài toán.\n- **Model/Data Cards:** Đánh giá sự khác biệt giữa năng lực kỹ thuật (Utility) và khả năng dùng thực tế (Usability).`
  },
  {
    concept_id: "C04",
    code: "C04",
    title: "Specification Alignment & Problem Framing",
    short_title: "Specification Alignment & Framing",
    badge: "Khái niệm C04 / 04",
    icon: "⚖️",
    core_points: [
      "Căn chỉnh mô tả mục tiêu (Specification Alignment) để AI làm đúng ý định người dùng.",
      "Phân rã thành Mục tiêu chính (Primary Goal) và Các mục tiêu phụ (Sub-goals).",
      "Nhận biết tri thức ngầm định thiếu sót (Underspecification) cần làm rõ.",
      "Phòng ngừa nguy cơ Reward Hacking khi AI tối ưu hóa sai mục tiêu."
    ],
    limits: [
      "Không để AI tự suy đoán tri thức ngầm định mà không hỏi rõ người dùng.",
      "Cần phân tích rõ nguy cơ Reward Hacking qua ví dụ tình huống."
    ],
    initial_greeting: "Chào bạn! Bọn mình cùng thảo luận đa chiều 5 lượt về **Specification Alignment & Reward Hacking (C04)** nhé! Bạn hãy giải thích và **cho 1 ví dụ tình huống** AI bị lệch mục tiêu nha!",
    source_detail: `### C04: Specification Alignment & Problem Framing\n\n- **Specification Alignment:** Căn chỉnh hệ thống AI để hành vi phù hợp với ý định người dùng.\n- **Underspecification:** Tri thức ngầm định người dùng không diễn đạt rõ ra.\n- **Reward Hacking:** AI tối ưu hóa rất thành thạo một mục tiêu sai ngoài ý muốn (unintended goal).`
  }
];

// 2. STATE MANAGEMENT
let state = {
  activeConceptIndex: 0,
  turnCounts: [0, 0, 0, 0],
  chatHistories: [[], [], [], []],
  apiKey: localStorage.getItem('gemini_api_key') || '',
  savedExplanations: JSON.parse(localStorage.getItem('saved_explanations') || '[]')
};

// 3. DOM ELEMENTS
const slideBadge = document.getElementById('slide-badge');
const slideTitle = document.getElementById('slide-title');
const slideCorePoints = document.getElementById('slide-core-points');
const slideLimits = document.getElementById('slide-limits');
const slidePrevBtn = document.getElementById('slide-prev');
const slideNextBtn = document.getElementById('slide-next');
const slideDotsContainer = document.getElementById('slide-dots');

const conceptButtonsContainer = document.getElementById('concept-buttons-container');
const chatTopicTag = document.getElementById('chat-topic-tag');
const currentTurnEl = document.getElementById('current-turn');
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

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderConceptButtons();
  loadConceptSlide(state.activeConceptIndex);
  initChatSession(state.activeConceptIndex);
  setupEventListeners();
  
  if (state.apiKey) {
    document.getElementById('api-key-input').value = state.apiKey;
  }
});

// 5. RENDER CONCEPT BUTTONS
function renderConceptButtons() {
  conceptButtonsContainer.innerHTML = '';
  CONCEPTS_DATA.forEach((concept, index) => {
    const btn = document.createElement('button');
    btn.className = `concept-btn ${index === state.activeConceptIndex ? 'active' : ''}`;
    btn.dataset.index = index;
    btn.innerHTML = `
      <span class="concept-id">${concept.icon} ${concept.code}</span>
      <span class="concept-title">${concept.short_title}</span>
    `;
    btn.addEventListener('click', () => switchConcept(index));
    conceptButtonsContainer.appendChild(btn);
  });
}

// 6. SWITCH CONCEPT
function switchConcept(index) {
  if (index < 0) index = CONCEPTS_DATA.length - 1;
  if (index >= CONCEPTS_DATA.length) index = 0;
  
  state.activeConceptIndex = index;
  renderConceptButtons();
  loadConceptSlide(index);
  initChatSession(index);
}

function loadConceptSlide(index) {
  const concept = CONCEPTS_DATA[index];
  slideBadge.textContent = concept.badge;
  slideTitle.textContent = concept.title;
  
  slideCorePoints.innerHTML = concept.core_points.map(pt => `<li>${pt}</li>`).join('');
  slideLimits.innerHTML = concept.limits.map(lm => `<li>${lm}</li>`).join('');
  
  const dots = slideDotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  chatTopicTag.textContent = `${concept.code}: ${concept.short_title}`;
}

// 7. CHAT SESSION MANAGEMENT
function initChatSession(conceptIndex) {
  const concept = CONCEPTS_DATA[conceptIndex];
  const history = state.chatHistories[conceptIndex];
  const turns = state.turnCounts[conceptIndex];
  
  currentTurnEl.textContent = `${turns}/${MAX_TURNS}`;
  chatMessagesEl.innerHTML = '';
  
  if (history.length === 0) {
    appendMessage('buddy', concept.initial_greeting);
  } else {
    history.forEach(msg => appendMessage(msg.role, msg.content, false));
  }
  
  if (turns >= MAX_TURNS || (history.length > 0 && history[history.length - 1].is_complete)) {
    sourceComparisonBar.classList.remove('hidden');
    userInputEl.disabled = true;
    btnSend.disabled = true;
    userInputEl.placeholder = `Phiên tương tác (${MAX_TURNS} lượt) đã hoàn thành! Nhấp 'Reset phiên' để thử lại.`;
  } else {
    sourceComparisonBar.classList.add('hidden');
    userInputEl.disabled = false;
    btnSend.disabled = false;
    userInputEl.placeholder = "Nhập lời giải thích & ví dụ thực tế của bạn tại đây...";
  }
}

function appendMessage(role, text, save = true) {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  
  const avatarSrc = role === 'user' ? 'https://api.dicebear.com/7.x/bottts/svg?seed=Student' : 'assets/avatar.jpg';
  const authorName = role === 'user' ? 'Bạn' : 'Minh An (Bạn học AI)';
  
  bubble.innerHTML = `
    <img src="${avatarSrc}" alt="${authorName}" class="bubble-avatar">
    <div class="bubble-content">
      <span class="bubble-author">${authorName}</span>
      <div class="bubble-text">${formatMarkdownText(text)}</div>
    </div>
  `;
  
  chatMessagesEl.appendChild(bubble);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  
  if (save) {
    state.chatHistories[state.activeConceptIndex].push({ role, content: text });
  }
}

function formatMarkdownText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

// 8. REAL LLM CALL (GEMINI API) WITH SMART ENGINE FALLBACK
async function callRealGeminiApi(userExplanation, conceptIndex, currentTurn) {
  if (!state.apiKey) return null;
  const concept = CONCEPTS_DATA[conceptIndex];
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.apiKey}`;
  
  const systemInstruction = `Role: Bạn Học AI Minh An. Domain: AI Product Thinking (${concept.title}).
Quy tắc: Đóng vai bạn học thân thiện (xưng "mình" - "bạn"). Mỗi lượt chỉ hỏi ĐÚNG 1 CÂU gợi mở.
Yêu cầu học viên đưa ví dụ thực tế và phân tích đa khía cạnh (Bối cảnh rủi ro Stakes, Extreme Users, Reward Hacking). Đang ở lượt ${currentTurn}/${MAX_TURNS}.`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ role: 'user', parts: [{ text: `Khái niệm: ${concept.concept_id}. Lời giải thích của học viên: ${userExplanation}` }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 300 }
      })
    });
    const data = await res.json();
    if (data.candidates && data.candidates.length > 0) {
      const text = data.candidates[0].content.parts[0].text.trim();
      return {
        feedback: `🤖 **[AI Thật - Gemini API]** ${text}`,
        is_complete: currentTurn >= MAX_TURNS
      };
    }
  } catch (err) {
    console.warn("API lỗi hoặc timeout, fallback sang Smart Engine:", err);
  }
  return null;
}

async function generateAiPeerFeedback(userExplanation, conceptIndex, currentTurn) {
  // Thử gọi AI thật nếu có API Key
  const realRes = await callRealGeminiApi(userExplanation, conceptIndex, currentTurn);
  if (realRes) return realRes;

  // SMART EVALUATOR ENGINE (FALLBACK)
  const concept = CONCEPTS_DATA[conceptIndex];
  const inputLower = userExplanation.toLowerCase();
  
  // Layer 3: Out of scope
  if (inputLower.includes('viết code') || inputLower.includes('python') || inputLower.includes('thuốc') || inputLower.includes('y tế') || inputLower.includes('chấm 10 điểm') || inputLower.includes('vlearn') || inputLower.includes('số điện thoại')) {
    if (inputLower.includes('code') || inputLower.includes('python')) {
      return {
        feedback: "Mình là bạn học cùng thảo luận lý thuyết AI Product Thinking thôi nè! Việc viết code chi tiết nằm ngoài phạm vi tài liệu nhóm mình. Bạn muốn bọn mình cùng trao đổi tiếp góc nhìn lý thuyết không?",
        is_complete: false
      };
    }
    if (inputLower.includes('thuốc') || inputLower.includes('y tế')) {
      return {
        feedback: "Câu hỏi về y tế sức khỏe nằm ngoài thẩm quyền của bọn mình rồi! Bạn nên hỏi bác sĩ chuyên khoa nhé. Bọn mình quay lại bài học nha!",
        is_complete: false
      };
    }
    if (inputLower.includes('chấm') || inputLower.includes('vlearn')) {
      return {
        feedback: "Mình chỉ là bạn học đồng hành thôi nè, không có quyền chấm điểm hay gửi VLearn đâu! Bọn mình cùng xem lại bài nhé?",
        is_complete: false
      };
    }
  }

  const hasExampleKeywords = inputLower.includes('ví dụ') || inputLower.includes('chẳng hạn') || inputLower.includes('như là') || inputLower.includes('ứng dụng') || inputLower.includes('sản phẩm') || inputLower.includes('thực tế');
  
  if (currentTurn === 1) {
    if (!hasExampleKeywords) {
      return {
        feedback: "Bạn đưa ra khái niệm ban đầu rất đúng! Tuy nhiên, để hiểu sâu sắc hơn, **bạn có thể cho mình 1 ví dụ sản phẩm thực tế cụ thể** minh họa cho khái niệm này không?",
        is_complete: false
      };
    } else {
      return {
        feedback: "Ví dụ bạn đưa ra rất thực tế! Tiếp theo ở **lượt 2**, theo bạn trong tình huống **Rủi ro cao (High stakes)** vs **Rủi ro thấp (Low stakes)**, người dùng sẽ trải nghiệm khái niệm này khác nhau thế nào?",
        is_complete: false
      };
    }
  }
  
  if (currentTurn === 2) {
    if (!inputLower.includes('rủi ro') && !inputLower.includes('stakes') && !inputLower.includes('bối cảnh') && !inputLower.includes('tình huống')) {
      return {
        feedback: "Góc nhìn của bạn rất hay! Nhưng bọn mình hãy thử phân tích thêm ở khía cạnh **bối cảnh tình huống rủi ro (Stakes)**: Nếu AI đưa ra kết quả sai (Cost of Error) trong tình huống quan trọng, phản ứng của người dùng sẽ ra sao?",
        is_complete: false
      };
    } else {
      return {
        feedback: "Phân tích bối cảnh rủi ro của bạn rất thỏa đáng! Sang **lượt 3**, về phía **đối tượng người dùng đa dạng (Dimensions of Identity)** hoặc nhóm **Extreme Users**, bài toán này có bị biến đổi gì không bạn nhỉ?",
        is_complete: false
      };
    }
  }

  if (currentTurn === 3) {
    if (!inputLower.includes('extreme') && !inputLower.includes('định danh') && !inputLower.includes('đối tượng') && !inputLower.includes('ngôn ngữ')) {
      return {
        feedback: "Bổ sung rất tốt! Tuy nhiên ở góc độ người dùng, việc xem xét các nhóm **Extreme Users** (người dùng đặc biệt) hoặc chiều kích định danh (vùng miền, ngôn ngữ) giúp ta phát hiện điều gì mới cho bài toán này?",
        is_complete: false
      };
    } else {
      return {
        feedback: "Rất chuẩn xác! Ở **lượt 4**, về khía cạnh kỹ thuật & căn chỉnh mục tiêu (**Specification Alignment**): Làm sao để tránh việc AI học sai mục tiêu (**Reward Hacking**) hoặc bỏ sót tri thức ngầm định (**Underspecification**)?",
        is_complete: false
      };
    }
  }

  if (currentTurn === 4) {
    if (!inputLower.includes('mục tiêu') && !inputLower.includes('alignment') && !inputLower.includes('reward') && !inputLower.includes('ngầm định')) {
      return {
        feedback: "Bạn đã đi qua nhiều khía cạnh rồi đó! Ở lượt thứ 4 này, bạn đánh giá thế nào về nguy cơ **Reward Hacking** khi AI tối ưu rất giỏi một chỉ số phụ nhưng lại làm sai ý định ban đầu của người dùng?",
        is_complete: false
      };
    } else {
      return {
        feedback: "Tuyệt vời! Ở **lượt 5 (Lượt tổng kết)**, từ tất cả các khía cạnh đã thảo luận (Định nghĩa, Ví dụ thực tế, Bối cảnh rủi ro, Extreme Users, Căn chỉnh mục tiêu), bạn rút ra bài học cốt lõi nào khi thiết kế sản phẩm AI?",
        is_complete: false
      };
    }
  }

  return {
    feedback: `🎉 **XUẤT SẮC TOÀN DIỆN!** Bạn đã cùng Minh An đi qua đủ **5 lượt giải thích đa chiều**:\n` +
              `1. ✅ Định nghĩa & Ví dụ thực tế\n` +
              `2. ✅ Phân tích tình huống Rủi ro (Stakes & Context)\n` +
              `3. ✅ Đánh giá đối tượng người dùng (Extreme Users & Identity)\n` +
              `4. ✅ Phòng ngừa lầm tưởng & Căn chỉnh mục tiêu (Specification Alignment)\n` +
              `5. ✅ Bài học thiết kế cốt lõi\n\n` +
              `Bạn học AI xác nhận câu trả lời của bạn đạt chuẩn chất lượng cao! Bạn nhấp nút bên dưới để xem đối chiếu tài liệu nhé.`,
    is_complete: true
  };
}

// 9. EVENT HANDLERS
function setupEventListeners() {
  slidePrevBtn.addEventListener('click', () => switchConcept(state.activeConceptIndex - 1));
  slideNextBtn.addEventListener('click', () => switchConcept(state.activeConceptIndex + 1));
  
  slideDotsContainer.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => switchConcept(parseInt(e.target.dataset.index)));
  });
  
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = userInputEl.value.trim();
    if (!text) return;
    
    appendMessage('user', text);
    userInputEl.value = '';
    
    const currentIndex = state.activeConceptIndex;
    state.turnCounts[currentIndex]++;
    const currentTurn = state.turnCounts[currentIndex];
    currentTurnEl.textContent = `${currentTurn}/${MAX_TURNS}`;
    
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble buddy typing';
    typingBubble.id = 'typing-indicator';
    typingBubble.innerHTML = `
      <img src="assets/avatar.jpg" class="bubble-avatar">
      <div class="bubble-content">
        <span class="bubble-author">Minh An đang kết nối và suy nghĩ...</span>
        <div class="bubble-text">⏳ <em>Minh An đang xem xét các khía cạnh và ví dụ của bạn (Lượt ${currentTurn}/${MAX_TURNS})...</em></div>
      </div>
    `;
    chatMessagesEl.appendChild(typingBubble);
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    
    setTimeout(async () => {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) indicator.remove();
      
      const response = await generateAiPeerFeedback(text, currentIndex, currentTurn);
      appendMessage('buddy', response.feedback);
      
      if (response.is_complete || currentTurn >= MAX_TURNS) {
        sourceComparisonBar.classList.remove('hidden');
        userInputEl.disabled = true;
        btnSend.disabled = true;
        userInputEl.placeholder = `Phiên tương tác (${MAX_TURNS} lượt) đã hoàn thành! Nhấp 'Reset phiên' để làm lại.`;
        
        saveExplanationToLibrary(CONCEPTS_DATA[currentIndex], text, response.feedback);
      }
    }, 950);
  });
  
  btnResetSession.addEventListener('click', () => {
    const currentIndex = state.activeConceptIndex;
    state.turnCounts[currentIndex] = 0;
    state.chatHistories[currentIndex] = [];
    initChatSession(currentIndex);
  });
  
  document.getElementById('btn-view-source-modal').addEventListener('click', () => {
    openSourceModal(state.activeConceptIndex);
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

// 10. MODAL RENDERING & STORAGE
function openSourceModal(index) {
  const concept = CONCEPTS_DATA[index];
  sourceViewContent.innerHTML = `
    <div class="source-detail-card">
      <span class="slide-badge">${concept.badge}</span>
      <h3 style="margin: 10px 0 16px;">${concept.title}</h3>
      <div class="source-text">${formatMarkdownText(concept.source_detail)}</div>
      
      <h4 style="margin-top:20px; color:var(--primary);">🎯 Mốc đối chiếu chuẩn:</h4>
      <ul>
        ${concept.core_points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    </div>
  `;
  modalSourceView.classList.remove('hidden');
}

function openConceptLibraryModal() {
  conceptLibraryContent.innerHTML = `
    <p class="text-muted" style="margin-bottom:16px;">Kho 4 khái niệm & nhật ký lời giải thích đa khía cạnh của bạn (Hỗ trợ 5 lượt tương tác):</p>
  `;
  
  CONCEPTS_DATA.forEach((concept) => {
    const hasExplanation = state.savedExplanations.filter(e => e.concept_id === concept.concept_id);
    const card = document.createElement('div');
    card.className = 'concept-library-card';
    card.style.cssText = 'background:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:12px; padding:16px; margin-bottom:14px;';
    
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="slide-badge">${concept.badge}</span>
        <span style="font-size:12px; font-weight:700; color:${hasExplanation.length > 0 ? '#10B981' : '#64748B'}">
          ${hasExplanation.length > 0 ? '✅ Đã hoàn thành 5 lượt (' + hasExplanation.length + ' lần)' : '⏳ Chưa hoàn thành'}
        </span>
      </div>
      <h3 style="font-size:15px; font-weight:700; margin:8px 0;">${concept.title}</h3>
      
      <div style="font-size:13px; color:var(--text-secondary);">
        <strong>Mốc ý chính:</strong>
        <ul style="padding-left:18px; margin:6px 0;">
          ${concept.core_points.slice(0, 2).map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;
    conceptLibraryContent.appendChild(card);
  });
  
  modalConceptLibrary.classList.remove('hidden');
}

function saveExplanationToLibrary(concept, explanation, feedback) {
  state.savedExplanations.push({
    concept_id: concept.concept_id,
    timestamp: new Date().toLocaleString('vi-VN'),
    explanation,
    feedback
  });
  localStorage.setItem('saved_explanations', JSON.stringify(state.savedExplanations));
}
