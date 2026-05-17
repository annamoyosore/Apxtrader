import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TradingChart from "../components/TradingChart";
import TradePanel from "../components/TradePanel";
import { account } from "../lib/appwrite";
import { getWallet } from "../lib/wallet";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const load = async () => {
      const u = await account.get();
      setUser(u);

      const w = await getWallet(u.$id);
      setWallet(w);
    };

    load();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="chart-area">
          <TradingChart />
        </div>

        <div className="trade-area">
          <h2>Welcome {user?.name}</h2>

          <h3>Balance: ${wallet?.balance}</h3>

          <TradePanel wallet={wallet} setWallet={setWallet} />
        </div>
      </div>
    </div>
  );
}