import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import { ToastContainer } from "react-toastify";
import HomePage from "./routes/homePage.route.jsx";
import Catering from "./routes/catering.route.jsx";
import AddInformation from "./routes/add-information.jsx";
import PaymentRoute from "./routes/payment.route.jsx";
import { LangProvider } from "./context/LangContext.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catering-menu",
        element: <Catering />,
      },
      {
        path: "/add-information",
        element: <AddInformation />,
      },
      {
        path: "/checkout",
        element: <PaymentRoute />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </LangProvider>
  </StrictMode>
);
