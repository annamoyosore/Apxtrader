import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";

import { account } from "./lib/appwrite";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account
      .get()
      .then((res) => setUser(res))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <Routes>
      {/* LANDING PAGE = AUTH */}
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Auth />}
      />

      {/* AUTH PAGE */}
      <Route path="/auth" element={<Auth />} />

      {/* DASHBOARD (PROTECTED) */}
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/" />}
      />

      {/* WALLET (PROTECTED) */}
      <Route
        path="/wallet"
        element={user ? <Wallet /> : <Navigate to="/" />}
      />
    </Routes>
  );
}