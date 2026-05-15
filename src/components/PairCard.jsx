import { Link } from "react-router-dom";

export default function PairCard({ pair, price }) {
  return (
    <Link to={`/trade/${pair}`}>
      <div className="pair-card">
        <h3>{pair}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
}