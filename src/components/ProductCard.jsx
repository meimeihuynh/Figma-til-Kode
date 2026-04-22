import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="image"></div>
      <p>{product.name}</p>
      <button>🛒</button>
    </div>
  );
}

export default ProductCard;