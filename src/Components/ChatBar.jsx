import { useState } from "react";

const ChatBar = ({ contacts, onUserClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-bar">
      <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div className="status-dot"></div>
          <span>Messaging</span>
        </div>
        <div className="header-actions">
          <span>{isOpen ? "▼" : "▲"}</span>
        </div>
      </div>

      {isOpen && (
        <div className="chat-content">
          <div className="search-box">
            <input type="text" placeholder="Search messages" />
          </div>
          {contacts.map((user) => (
            <div
              key={user.id}
              className="user-item"
              onClick={() => onUserClick(user)}
            >
              <div className="avatar-container">
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  alt={user.name}
                  className="avatar"
                />
                {user.online && <div className="online-indicator"></div>}
              </div>
              <div className="user-info">
                <div className="user-name-row">
                  <span className="name">{user.name}</span>
                  <span className="time">{user.lastTime}</span>
                </div>
                <div className="last-msg">{user.lastMsg}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatBar;
