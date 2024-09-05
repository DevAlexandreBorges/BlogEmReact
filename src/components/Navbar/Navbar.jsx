import React from "react";
import logoImg from "../../assets/imgs/logo.png";
import "./styles.css";

export function Navbar() {
  return (
    <header>
      <nav id="nav-bar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//exportando a classe Navbar para o arquivo App.jsx de uma maneira padrão
// export default Navbar;
