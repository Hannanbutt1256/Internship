import { useEffect } from "react";
import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    // Load Google Maps API script
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (googleMapsApiKey) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
      script.async = true;
      script.onload = () => console.log("Google Maps script loaded");
      script.onerror = () => console.error("Failed to load Google Maps script");
      document.body.appendChild(script);
    } else {
      console.error("Google Maps API Key is missing in .env");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
