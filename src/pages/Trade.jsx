import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrice } from "../lib/forexApi";

export default function Trade() {
  const { pair } = useParams();

  const [price, setPrice] = useState(0);
  const [lot, setLot] = useState(0.01);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    async function loadPrice() {
      const data = await getPrice(pair);

      if (data.price) {
        setPrice(Number(data.price));
      }
    }

    loadPrice();

    const interval = setInterval(loadPrice, 3000);

    return () => clearInterval(interval);
  }, [pair]);

  function openTrade(type) {
    const trade = {
      id: Date.now(),
      pair,
      type,
      entryPrice: price,
      currentPrice: price,
      lot,
      profit: 0
    };

    setTrades((prev) => [...prev, trade]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((prev) =>
        prev.map((trade) => {
          let profit = 0;

          if (trade.type === "BUY") {
            profit = (price - trade.entryPrice) * 1000 * trade.lot;
          } else {
            profit = (trade.entryPrice - price) * 1000 * trade.lot;
          }

          return {
            ...trade,
            currentPrice: price,
            profit
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [price]);

  function closeTrade(id) {
    const trade = trades.find((t) => t.id === id);

    const currentBalance = Number(
      localStorage.getItem("demoBalance") || 10000
    );

    const newBalance = currentBalance + trade.profit;

    localStorage.setItem("demoBalance", newBalance);

    setTrades((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <h1>{pair}</h1>

      <div className="price-box">
        <h2>{price}</h2>
      </div>

      <div className="lot-box">
        <label>Lot Size</label>

        <input
          type="number"
          step="0.01"
          value={lot}
          onChange={(e) => setLot(Number(e.target.value))}
        />
      </div>

      <div className="btns">
        <button className="buy" onClick={() => openTrade("BUY")}>
          BUY
        </button>

        <button className="sell" onClick={() => openTrade("SELL")}>
          SELL
        </button>
      </div>

      <div>
        <h2>Open Trades</h2>

        {trades.map((trade) => (
          <div key={trade.id} className="trade-card">
            <h3>{trade.type}</h3>

            <p>Entry: {trade.entryPrice}</p>

            <p>Current: {trade.currentPrice}</p>

            <p>Profit: ${trade.profit.toFixed(2)}</p>

            <button onClick={() => closeTrade(trade.id)}>
              Close Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}