import { useState } from "react";

import {
  databases,
  DATABASE_ID,
  TRADES_COLLECTION_ID,
  IDD
} from "../lib/appwrite";

export default function TradePanel() {
  const [amount, setAmount] = useState(10);

  const placeTrade = async direction => {
    try {
      const result =
        Math.random() > 0.5
          ? "WIN"
          : "LOSS";

      await databases.createDocument(
        DATABASE_ID,
        TRADES_COLLECTION_ID,
        IDD.unique(),
        {
          pair: "EUR/USD",
          amount: Number(amount),
          direction,
          result,
          createdAt: new Date().toISOString()
        }
      );

      alert(`Trade ${result}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="trade-panel">
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={() => placeTrade("BUY")}>
        BUY
      </button>

      <button onClick={() => placeTrade("SELL")}>
        SELL
      </button>
    </div>
  );
}