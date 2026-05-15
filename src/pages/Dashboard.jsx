import { useEffect, useState } from "react";
import PairCard from "../components/PairCard";
import { getPrice } from "../lib/forexApi";

export default function Dashboard() {
  const [prices, setPrices] = useState({});

  const pairs = [
    "EUR/USD",
    "GBP/USD",
    "USD/JPY",
    "XAU/USD"
  ];

  useEffect(() => {
    async function loadPrices() {
      const updated = {};

      for (const pair of pairs) {
        const data = await getPrice(pair);

        updated[pair] = data.price;
      }

      setPrices(updated);
    }

    loadPrices();

    const interval = setInterval(loadPrices, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Market</h1>

      <div className="grid">
        {pairs.map((pair) => (
          <PairCard
            key={pair}
            pair={pair}
            price={prices[pair] || "Loading..."}
          />
        ))}
      </div>
    </div>
  );
}