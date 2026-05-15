import { useEffect, useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(10000);

  useEffect(() => {
    const saved = localStorage.getItem("demoBalance");

    if (saved) {
      setBalance(Number(saved));
    }
  }, []);

  return (
    <div className="container">
      <h1>Demo Wallet</h1>

      <div className="wallet-box">
        <h2>${balance.toFixed(2)}</h2>
      </div>
    </div>
  );
}