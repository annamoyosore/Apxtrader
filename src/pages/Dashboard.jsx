import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TradingChart from "../components/TradingChart";
import TradePanel from "../components/TradePanel";

import { account } from "../lib/appwrite";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await account.get();
        setUser(res);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        Loading dashboard...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        Not logged in. Please go to login.
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="chart-area">
          <TradingChart />
        </div>

        <div className="trade-area">
          <h2>Welcome {user.name}</h2>

          <h3>Balance: $10,000</h3>

          <TradePanel />
        </div>
      </div>
    </div>
  );
}