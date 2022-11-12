import { createBrowserRouter } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);
export default router;
