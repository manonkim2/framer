import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengesPage /> },
  { path: "/test", element: <Test /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
