import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Page/Home.jsx";
import Network from "./Page/Network.jsx";
import Profile from "./Page/Profile.jsx";
import Landing from "./Page/Landing.jsx";
import "./App.css";
// import { userProfile, postsData } from "./data/mockData.js";
// import SuggestedPeople from "./Components/SuggestedPeople.jsx";
// import Navbar from "./Components/Nav-bar.jsx";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />, // Pure Landing Page experience
  },
  {
    path: "/",
    element: <Layout />, // Dashboard Layout for other pages
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: "messages",
        element: (
          <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 text-center text-gray-500">
            คุณสามารถเปิดแชทได้จากแถบด้านล่างขวา
          </div>
        ),
      },
      {
        path: "jobs",
        element: (
          <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 text-center text-gray-500">
            กำลังเตรียมข้อมูลตำแหน่งงานที่น่าสนใจสำหรับคุณ...
          </div>
        ),
      },
      {
        path: "notifications",
        element: (
          <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 text-center text-gray-500">
            ไม่มีการแจ้งเตือนใหม่ในขณะนี้
          </div>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
