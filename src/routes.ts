import { createBrowserRouter } from "react-router";
import HomePage from "./page/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
]);
