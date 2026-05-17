export default function TradingChart() {
  return (
    <iframe
      title="Trading Chart"
      src="https://s.tradingview.com/widgetembed/?symbol=FX:EURUSD&interval=1&theme=dark"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}