import { Outlet, Link } from "react-router-dom";
import SideBar from "./Sidebar.jsx"; // แก้ให้ตรงกับชื่อไฟล์แล้ว
import ChatBar from "./ChatBar.jsx";
// คอมเมนต์อันที่ยังไม่ได้สร้างทิ้งไปก่อน
import SuggestedPeople from "./SuggestedPeople.jsx";
import { contactsData } from "../data/mockData.js";
import { useState } from "react";

// สร้างข้อมูลจำลองใส่ไว้ตรงนี้ชั่วคราว
const contactsData = [
  { id: 1, name: "ฟง", avatar: "https://via.placeholder.com/40", online: true, lastTime: "10:00", lastMsg: "สวัสดีครับ" },
  { id: 2, name: "จอห์น", avatar: "https://via.placeholder.com/40", online: false, lastTime: "09:30", lastMsg: "See you later!" }
];

export default function Layout() {
  const [activeChats, setActiveChats] = useState([]);
  const [chatHistories, setChatHistories] = useState({
    1: [{ text: "สวัสดีครับฟง! มีโปรเจกต์ใหม่มาแนะนำ", type: "inbound" }],
    2: [{ text: "See you later!", type: "inbound" }],
  });

  const contacts = contactsData;

  // ... (ฟังก์ชัน openChat, closeChat, handleSendMessage ไว้เหมือนเดิม)

  return (
    <div className="min-h-screen bg-black">
      {/* ... โค้ด Nav Bar และส่วนอื่นๆ ของคุณ ... */}

      {/* Main Content */}
      <div className="max-w-[1128px] mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[225px] flex-shrink-0">
            <SideBar />
          </div>

          <div className="flex-1 min-w-0">
            <Outlet />
          </div>

          <div className="hidden lg:block w-[300px] flex-shrink-0">
            {/* ปิด Component ที่ยังไม่สร้างไปก่อน */}
            {/* <SuggestedPeople /> */}
            <div className="text-white p-4 bg-[#1a1a1a] rounded-xl border border-gray-800">
              รอสร้างหน้า SuggestedPeople...
            </div>
          </div>
        </div>
      </div>

      {/* ... โค้ด Messaging System ของคุณ ... */}
    </div>
  );
}