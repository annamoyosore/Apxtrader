import { Link, useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/"); // go back to login
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <nav className="navbar">
      <h2>ApexTrader</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>

        <button onClick={logout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      </div>
    </nav>
  );
}