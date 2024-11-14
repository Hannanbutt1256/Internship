import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./common/Error";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default App;
