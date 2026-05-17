import { useState } from "react";
import { databases, DATABASE_ID, TRADE_COLLECTION, ID } from "../lib/appwrite";
import { updateBalance } from "../lib/wallet";

export default function TradePanel({ wallet, setWallet }) {
  const [amount, setAmount] = useState(10);

  const placeTrade = async (direction) => {
    if (!wallet) return;

    const result = Math.random() > 0.5 ? "WIN" : "LOSS";

    let newBalance = wallet.balance;

    if (result === "WIN") {
      newBalance += Number(amount);
    } else {
      newBalance -= Number(amount);
    }

    await databases.createDocument(
      DATABASE_ID,
      TRADE_COLLECTION,
      ID.unique(),
      {
        pair: "EUR/USD",
        amount: Number(amount),
        direction,
        result,
        userId: wallet.userId,
        createdAt: new Date().toISOString(),
      }
    );

    await updateBalance(wallet.$id, newBalance);

    setWallet({ ...wallet, balance: newBalance });

    alert(`Trade ${result}`);
  };

  return (
    <div className="trade-panel">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={() => placeTrade("BUY")}>BUY</button>
      <button onClick={() => placeTrade("SELL")}>SELL</button>
    </div>
  );
}