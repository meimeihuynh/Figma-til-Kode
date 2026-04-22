import { useState } from "react";

function Header({ onMenuClick, onSearchClick }) {
  return (
    <div className="header">
      <button onClick={onMenuClick}>☰</button>
      <h1>Nu: Qiu</h1>
      <div>
        <button onClick={onSearchClick}>🔍</button>
        <button>👤</button>
        <button>🛒</button>
      </div>
    </div>
  );
}

export default Header;