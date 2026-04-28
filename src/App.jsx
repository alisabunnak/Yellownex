import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../../../react-app-starter/src/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{}, {}, {}],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function MainFeed() {
  return (
    <div className="middle-column">
      <StartPost />
    </div>
  );
}
