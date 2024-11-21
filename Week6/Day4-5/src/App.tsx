import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
function App() {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <SpeedInsights />
        <Outlet />
      </div>
    </>
  );
}

export default App;
