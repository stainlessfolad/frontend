import { createBrowserRouter } from "react-router";
import HomePage from "./page/home/Home";
import ContactUsPage from "./page/contact_us/ContactUs";

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
