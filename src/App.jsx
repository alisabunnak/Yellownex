
import { useState } from "react";
import ChatBar from "./Components/ChatBar.jsx";import "./App.css";


function App() {
  // 1. เก็บลิสต์หน้าต่างแชทที่เปิดอยู่
  const [activeChats, setActiveChats] = useState([]);

  // 2. เก็บประวัติการแชท (แยกตาม ID ของคนคุย)
  const [chatHistories, setChatHistories] = useState({
    1: [{ text: "สวัสดีครับฟง! มีโปรเจกต์ใหม่มาแนะนำ", type: "inbound" }],
    2: [{ text: "See you later!", type: "inbound" }],
  });

  const contacts = [
    {
      id: 1,
      name: "Melissa Torres",
      role: "LinkedIn Offer",
      lastMsg: "Update your job...",
      lastTime: "11:15 AM",
      online: true,
    },
    {
      id: 2,
      name: "CK Cheong",
      role: "CEO @ Fastwork",
      lastMsg: "See you later!",
      lastTime: "Yesterday",
      online: false,
    },
  ];

  // ฟังก์ชันเปิดหน้าต่างแชท
  const openChat = (user) => {
    if (!activeChats.find((c) => c.id === user.id)) {
      setActiveChats([...activeChats, user]);
    }
  };

  // ฟังก์ชันปิดหน้าต่างแชท
  const closeChat = (id) => {
    setActiveChats(activeChats.filter((c) => c.id !== id));
  };

  // ฟังก์ชันส่งข้อความ
  const handleSendMessage = (userId, text) => {
    if (!text.trim()) return;

    setChatHistories((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), { text: text, type: "outbound" }],
    }));
  };

  return (

    <div className="app-container">
      {/* ส่วนเนื้อหาหลักของเว็บ (ถ้ามี) */}

    </div>
      <div className="flex justify-center gap-6 p-6">
        <SuggestedPeople />
      </div>

      <section id="center">
        <h1>Hackathon Project</h1>
        <p>ลองคลิกที่แถบ Messaging ขวาล่างเพื่อเริ่มแชท!</p>
      </section>

      {/* Messaging System Container */}
      <div className="messaging-container">
        {/* Render หน้าต่างแชทที่เด้งออกมา */}
        {activeChats.map((chat) => (
          <div key={chat.id} className="chat-window">
            <div className="chat-header">
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {chat.name}
                </span>
              </div>
              <button className="close-btn" onClick={() => closeChat(chat.id)}>
                ✕
              </button>
            </div>

            <div className="message-list">
              {chatHistories[chat.id]?.map((msg, index) => (
                <div key={index} className={`msg-bubble msg-${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Write a message..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(chat.id, e.target.value);
                    e.target.value = ""; // เคลียร์ช่องพิมพ์หลังส่ง
                  }
                }}
              />
            </div>
          </div>
        ))}

        {/* แถบรายชื่อผู้ติดต่อ (แยก Component) */}
        <ChatBar contacts={contacts} onUserClick={openChat} />
      </div>
    </div>
  );
}




function MainFeed() {
  return (
    <div className="middle-column">
      <StartPost />

    </div>
  )
}

export default App
