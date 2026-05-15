export default function OpenTrades({ trades }) {
  return (
    <div>
      <h2>Open Trades</h2>

      {trades.map((trade) => (
        <div key={trade.$id} className="trade-card">
          <h3>{trade.pair}</h3>

          <p>{trade.type}</p>

          <p>Entry: {trade.entryPrice}</p>

          <p>Current: {trade.currentPrice}</p>

          <p>Profit: {trade.profit}</p>
        </div>
      ))}
    </div>
  );
}