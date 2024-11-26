import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/Login.tsx";
import SignUp from "./pages/Register.tsx";
import Settings from "./pages/Settings.tsx";
import Profile from "./pages/Profile.tsx";
import About from "./pages/About.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="login" element={<SignIn />} />
    <Route path="register" element={<SignUp />} />
    <Route
      index
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/about"
      element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    />
  </Route>
);
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
