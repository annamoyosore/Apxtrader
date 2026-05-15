import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h2>FOREX DEMO</h2>

      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>
      </div>
    </div>
  );
}