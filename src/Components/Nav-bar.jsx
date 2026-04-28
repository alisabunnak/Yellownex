<<<<<<< HEAD
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  UserCircle,
  Grid,
=======

import { 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  UserCircle, 
  Grid, 
>>>>>>> d4673fd (No_config2)
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "หน้าแรก", active: true },
    { icon: <Users size={24} />, label: "เครือข่ายของฉัน", active: false },
    { icon: <Briefcase size={24} />, label: "งาน", active: false },
    { icon: <MessageSquare size={24} />, label: "ข้อความ", active: false },
    {
      icon: <Bell size={24} />,
      label: "การแจ้งเตือน",
      active: false,
      badge: 1,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
        {/* Left Side: Logo and Search */}
        <div className="flex items-center gap-2 flex-1">
          {/* Logo with Sora Font */}
          <div
            className="font-bold text-3xl mr-4 select-none"
            style={{ color: "#FFBE00", fontFamily: "'Sora', sans-serif" }}
          >
            YellowNex
          </div>

          {/* Search Input */}
          <div className="relative max-w-[280px] w-full hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="ค้นหา"
              className="block w-full pl-10 pr-3 py-1.5 bg-[#edf3f8] border border-transparent rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all"
            />
          </div>
        </div>

        {/* Right Side: Navigation Buttons */}
        <div className="flex items-center h-full">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center h-full min-w-[80px] transition-colors relative group
                ${item.active ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"}`}
            >
              <div className="relative mt-1">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 border-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[12px] mt-0.5 font-light">
                {item.label}
              </span>
            </button>
          ))}

          {/* Profile Button */}
          <button className="flex flex-col items-center justify-center h-full min-w-[80px] text-gray-500 hover:text-black border-r border-gray-200">
            <UserCircle size={24} />
            <div className="flex items-center text-[12px] mt-0.5">
              <span>ฉัน</span>
              <ChevronDown size={14} />
            </div>
          </button>

          {/* Business & Premium Links */}
          <div className="hidden lg:flex items-center h-full ml-4 gap-4">
            <button className="flex flex-col items-center justify-center text-gray-500 hover:text-black">
              <Grid size={24} />
              <div className="flex items-center text-[12px] mt-0.5">
                <span>ค้นหาธุรกิจ</span>
                <ChevronDown size={14} />
              </div>
            </button>

            <button className="text-[12px] text-amber-700 underline text-center leading-tight hover:text-amber-900 max-w-[100px] font-medium">
              ลองใช้ Premium ในราคา ฿0
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
