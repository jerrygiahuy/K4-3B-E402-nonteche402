import streamlit as st
import json
import os
from agent import get_ai_feedback

# Page Setup
st.set_page_config(
    page_title="🎓 Bạn Học AI - D3 MVP",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Load concept mapping
def load_concepts():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(base_dir, 'source', 'concept_mapping.json')
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f).get('concepts', [])
    return []

concepts = load_concepts()

# Custom Light Theme CSS
st.markdown("""
<style>
    .main { background-color: #F8FAFC; }
    .stApp { font-family: 'Plus Jakarta Sans', sans-serif; }
    .slide-card {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        margin-bottom: 20px;
    }
    .badge {
        background: #FEF3C7;
        color: #D97706;
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
    }
    .buddy-banner {
        background: linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 100%);
        border: 1px solid #DBEAFE;
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 20px;
    }
</style>
""", unsafe_allow_html=True)

# Title & Header
st.title("🎓 Bạn Học AI — D3 MVP")
st.caption("Học bằng cách dạy · Giải thích để hiểu | Nhóm nonteche402 (Huy, Triển, Hiệp)")

# State initialization
if "active_concept_idx" not in st.session_state:
    st.session_state.active_concept_idx = 0
if "messages" not in st.session_state:
    st.session_state.messages = {}
if "turn_counts" not in st.session_state:
    st.session_state.turn_counts = {}

# Current Concept
current_concept = concepts[st.session_state.active_concept_idx] if concepts else None
cid = current_concept["concept_id"] if current_concept else "C01"

if cid not in st.session_state.messages:
    st.session_state.messages[cid] = [
        {"role": "assistant", "content": f"Chào bạn! Minh An (Bạn học AI) đây. Hãy chọn một khái niệm và thử giải thích lại cho mình lắng nghe nhé!"}
    ]
if cid not in st.session_state.turn_counts:
    st.session_state.turn_counts[cid] = 0

# --- TOP SECTION: SLIDE MÔ PHỎNG KIẾN THỨC ---
st.markdown("### 📖 Slide Mô Phỏng Kiến Thức")
if current_concept:
    st.markdown(f"""
    <div class="slide-card">
        <span class="badge">{current_concept['concept_id']} / 04</span>
        <h2 style="margin: 8px 0; font-size: 22px;">{current_concept['title']}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 14px;">
            <div>
                <h4 style="color: #2563EB;">📌 Ý chính cần có:</h4>
                <ul>{''.join([f'<li>{p}</li>' for p in current_concept['core_points']])}</ul>
            </div>
            <div>
                <h4 style="color: #D97706;">⚠️ Giới hạn & Mốc đối chiếu:</h4>
                <ul>{''.join([f'<li>{p}</li>' for p in current_concept['limits']])}</ul>
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)

# --- MID SECTION: BANNER & CONCEPT BUTTONS ---
st.markdown("""
<div class="buddy-banner">
    <h3>Kiểm tra bạn đã hiểu khái niệm chưa bằng cách giải thích lại cho <strong>"Minh An - Bạn học AI"</strong> 👩‍🎓</h3>
    <p>Chọn khái niệm bên dưới để xem slide và bắt đầu tự giải thích:</p>
</div>
""", unsafe_allow_html=True)

cols = st.columns(4)
for i, c in enumerate(concepts):
    btn_label = f"{c['concept_id']}: {c['title'].split(' ')[0]}"
    if cols[i].button(btn_label, key=f"cbtn_{i}", use_container_width=True):
        st.session_state.active_concept_idx = i
        st.rerun()

# --- CHAT INTERFACE ---
st.markdown("---")
st.subheader(f"💬 Giao diện Chat: {current_concept['title'] if current_concept else ''}")
st.write(f"Lượt tương tác: **{st.session_state.turn_counts[cid]}/2**")

# Display Messages
for msg in st.session_state.messages[cid]:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

# Reset Session Button
if st.button("🔄 Reset phiên chat", key="reset_btn"):
    st.session_state.messages[cid] = [
        {"role": "assistant", "content": f"Chào bạn! Minh An (Bạn học AI) đây. Hãy thử giải thích khái niệm **{current_concept['title']}** theo cách hiểu của bạn nhé!"}
    ]
    st.session_state.turn_counts[cid] = 0
    st.rerun()

# Input Chat
if prompt := st.chat_input("Giải thích khái niệm tại đây..."):
    if st.session_state.turn_counts[cid] < 2:
        st.session_state.messages[cid].append({"role": "user", "content": prompt})
        st.session_state.turn_counts[cid] += 1
        
        # Get AI Feedback
        feedback = get_ai_feedback(prompt, concept_id=cid, turn_count=st.session_state.turn_counts[cid])
        st.session_state.messages[cid].append({"role": "assistant", "content": feedback})
        st.rerun()
    else:
        st.warning("Bạn đã hoàn thành tối đa 2 lượt tương tác cho phiên này! Hãy bấm Reset để thử lại.")
