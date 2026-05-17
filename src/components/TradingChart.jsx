import TradingViewWidget from "react-tradingview-widget";

export default function TradingChart() {
  return (
    <TradingViewWidget
      symbol="FX:EURUSD"
      theme="dark"
      autosize
    />
  );
}