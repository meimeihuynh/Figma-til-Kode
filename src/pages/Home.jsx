import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "src/Products";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div>
      <Header
        onMenuClick={() => setMenuOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />

      <div className="content">
        <input placeholder="Søk..." />

        <h2>Alle varer</h2>

        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {menuOpen && <div className="overlay">Menu</div>}
      {searchOpen && <div className="overlay">Search</div>}
    </div>
  );
}

export default Home;