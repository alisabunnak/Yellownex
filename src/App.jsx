// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Layout from "../../../react-app-starter/src/components/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{}, {}, {}],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;

import {  createBrowserRouter,RouterProvider} from "react-router-dom";
import ChatBar from "./Components/ChatBar.jsx";
import SuggestedPeople from "./Components/SuggestedPeople.jsx";
import StartPost from "./Components/StartPost.jsx";
import SideBar from "./Components/SideBar.jsx";
import Layout from "./Components/Layout.jsx";
import Home from "./Page/Home.jsx";
import "./App.css";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "CharBar",
        element: <ChatBar />
      },
      {
        path: "messages",
        element: <div>Messages Page</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
