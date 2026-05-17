import { Link } from "react-router-dom";
import { logoutUser } from "../auth";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>ApexTrader</h2>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>

        <button onClick={logoutUser}>
          Logout
        </button>
      </div>
    </nav>
  );
}