import React from 'react';
import produtos from '../../utils/ProdutosData';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Sugestao = ({ produto }) => {
  const produtosRelacionados = produtos.filter((p) => p.id !== produto.id);
  const produtoSugerido = produtosRelacionados[Math.floor(Math.random() * produtosRelacionados.length)];

  if (produtoSugerido) {
    return (
      <div className="text-success">
        <p>Que tal levar também o produto {produtoSugerido.nome}?</p>
      </div>
    );
  }

  return null;
};

const ProductCard = ({ adicionarAoCarrinho }) => {
  const location = useLocation();
  const isOnCartPage = location.pathname === '/carrinho';
  return (
    <div className="container">
    <div className="row g-3">
      {produtos.map((produto) => (
        <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card text-center bg-light">
          <Link to="/carrinho" className="position-absolute end-0 p-2 text-danger">
            <i className="bi-suit-heart" style={{ fontSize: '24px', lineHeight: '24px' }}></i>
         </Link>
         <Link to="/carrinho">
              <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
          </Link>
            <div className="card-header">
              R$ {produto.preco.toFixed(2)}
            </div>
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text truncar-3l">
                {produto.descricao}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
            {isOnCartPage && (
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Adicionar ao Carrinho
                </button>
            )}
              </div>
              <div card-footer d-flex justify-content-center align-items-center>
                <Sugestao produto={produto} />
      '         <small className="text-success">{produto.estoque} unidades em estoque</small>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductCard;
