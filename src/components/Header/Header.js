import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom shadow-sm mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Caoli Moda Feminina</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contato">Contato</Link>
              </li>
            </ul>
            <div className="align-self-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/cadastro" className="nav-link text-white">Quero Me Cadastrar</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">Entrar</Link>
                </li>
                <li className="nav-item">
                  <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0" title="5 produto(s) no carrinho">
                  </span>
                  <Link to="/carrinho" className="nav-link text-white">
                    <i className="bi-cart" style={{ fontSize: "24px", lineHeight: "24px" }}></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
