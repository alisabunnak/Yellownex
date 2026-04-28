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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatBar from "./Components/ChatBar.jsx";
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
        path:"/",
        element: <Home />,
      },
      {
        path: "network",
        element: <div>My Network Page</div>,
      },
      {
        path: "ChatBar",
        element: <ChatBar />,
      },
      {
        path: "messages",
        element: <div>Messages Page</div>,
      },
      {
        path: "profile",
        element: <div>Profile Page</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
