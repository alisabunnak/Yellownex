import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import ChatBar from "./ChatBar.jsx";
import { useState } from "react";

export default function Layout() {
  const [activeChats, setActiveChats] = useState([]);
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

  const openChat = (user) => {
    if (!activeChats.find((c) => c.id === user.id)) {
      setActiveChats([...activeChats, user]);
    }
  };

  const closeChat = (id) => {
    setActiveChats(activeChats.filter((c) => c.id !== id));
  };

  const handleSendMessage = (userId, text) => {
    if (!text.trim()) return;
    setChatHistories((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), { text: text, type: "outbound" }],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Linked
              </Link>
              <input
                type="text"
                placeholder="ค้นหา"
                className="bg-gray-100 rounded-md px-4 py-2 w-64 hidden md:block"
              />
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                หน้าหลัก
              </Link>
              <Link
                to="/messages"
                className="text-gray-600 hover:text-gray-900"
              >
                ข้อความ
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                โปรไฟล์
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex gap-6">
          {/* Sidebar - Left */}
          <div className="hidden md:block w-1/4">
            <SideBar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Sidebar - Right (Suggested People) */}
          <div className="hidden lg:block w-1/4">
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">
                คนที่คุณอาจรู้จัก
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm">สมชาย ใจดี</p>
                    <p className="text-xs text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm">วิชัย รักเรียน</p>
                    <p className="text-xs text-gray-500">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messaging System */}
      <div className="messaging-container">
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
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
        <ChatBar contacts={contacts} onUserClick={openChat} />
      </div>
    </div>
  );
}
