import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Trade from "./pages/Trade";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/trade/:pair" element={<Trade />} />
      </Routes>
    </div>
  );
}