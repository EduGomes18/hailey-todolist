import {
  createBrowserRouter
} from "react-router-dom";
import Todolist from "../components/pages/todolist";
import Timer from "../components/pages/timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todolist />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
]);

export default router;