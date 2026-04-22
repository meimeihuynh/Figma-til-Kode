import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div className="content">
      <h1>{id}</h1>

      <div className="image-large"></div>

      <p>-250kr</p>

      <div className="quantity">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <button>Legg til kurv</button>
      <button>Kjøp nå</button>

      <h2>Beskrivelse</h2>
      <p>Lorem ipsum...</p>
    </div>
  );
}

export default Product;