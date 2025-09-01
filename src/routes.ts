import { createBrowserRouter } from "react-router";
import HomePage from "./page/Home";
import ContactUsPage from "./page/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/contact-us",
    Component: ContactUsPage,
  },
]);
