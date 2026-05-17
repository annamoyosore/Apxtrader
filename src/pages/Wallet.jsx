import Navbar from "../components/Navbar";

export default function Wallet() {
  return (
    <div>
      <Navbar />

      <div className="wallet-page">
        <h1>Wallet</h1>

        <div className="wallet-card">
          <h2>Deposit</h2>
          <button>Deposit Funds</button>
        </div>

        <div className="wallet-card">
          <h2>Withdraw</h2>
          <button>Withdraw Funds</button>
        </div>
      </div>
    </div>
  );
}