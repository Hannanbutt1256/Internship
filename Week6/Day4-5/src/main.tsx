import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import Cart from "./pages/Cart.tsx";
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="cart" element={<Cart />} />
  </Route>
);
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
