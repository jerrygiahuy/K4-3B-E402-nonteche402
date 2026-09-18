import streamlit as st
from agent import get_ai_feedback

st.title("🎓 Bạn học AI - D3 MVP")

# State quản lý phiên
if "messages" not in st.session_state:
    st.session_state.messages = []

# UI hiển thị chat
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Input từ người dùng
if prompt := st.chat_input("Giải thích khái niệm tại đây..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Gọi luồng xử lý từ agent
    with st.chat_message("assistant"):
        feedback = get_ai_feedback(prompt)
        st.markdown(feedback)
        st.session_state.messages.append({"role": "assistant", "content": feedback})
