import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";

// Simple auth guard
const isLoggedIn = () => {
  return localStorage.getItem("cookieFallback") !== null;
};

export default function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route
        path="/"
        element={
          isLoggedIn() ? (
            <Dashboard />
          ) : (
            <Navigate to="/auth" />
          )
        }
      />

      {/* Auth page (Login/Register) */}
      <Route path="/auth" element={<Auth />} />

      {/* Wallet (protected) */}
      <Route
        path="/wallet"
        element={
          isLoggedIn() ? (
            <Wallet />
          ) : (
            <Navigate to="/auth" />
          )
        }
      />
    </Routes>
  );
}