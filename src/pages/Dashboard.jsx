import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TradingChart from "../components/TradingChart";
import TradePanel from "../components/TradePanel";

import { getCurrentUser } from "../auth";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="chart-area">
          <TradingChart />
        </div>

        <div className="trade-area">
          <h2>
            Welcome {user?.name}
          </h2>

          <h3>Balance: $10,000</h3>

          <TradePanel />
        </div>
      </div>
    </div>
  );
}