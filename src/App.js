import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Carousel from './components/Carousel/Carousel';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Termos from './components/Termos/Termos';
import Cadastro from './components/Cadastro/Cadatro';
import Carrinho from './components/Carrinho/Carrinho';
import './App.css';
import produtos from './utils/ProdutosData';
import Login from './components/Login/Login';
import FimCompra from './components/FimCompra/FimCompra ';
import ContactForm from './components/Contato/Contato';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, { ...produto, quantidade: 1 }]);
  };

  return (
    <div className="d-flex flex-column wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fimcompra" element={<FimCompra />} />
          <Route path="/contato" element={<ContactForm/>} />
        </Routes>
        <Routes>
          {/* Renderizar o ProductCard somente na página inicial e no carrinho */}
          <Route path="/" element={<ProductCard produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />} />
          <Route path="/carrinho" element={<ProductCard produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
