import React from 'react';
import { Link } from 'react-router-dom';
import './Carrinho.css';

const Carrinho = ({ carrinho, setCarrinho }) => {
  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total.toFixed(2);
  };

  const aumentarQuantidade = (id) => {
    const produtoExistente = carrinho.find((produto) => produto.id === id);

    if (produtoExistente) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.map((produto) =>
          produto.id === id ? { ...produto, quantidade: produto.quantidade + 1 } : produto
        )
      );
    }
  };

  const diminuirQuantidade = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: Math.max(produto.quantidade - 1, 1) } // Garante que a quantidade não seja menor que 1
          : produto
      )
    );
  };

  const removerProduto = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== id));
  };

  return (
    <div className="container">
      <h1>Carrinho de Compras</h1>
      <ul className="list-group mb-3">
        {carrinho.map((produto) => (
          <li className="list-group-item py-3" key={produto.id}>
            <div className="row g-3">
              <div className="col-6">
                <img src={produto.imagem} className="card-img-small" alt={produto.nome} />
                <h5>{produto.nome}</h5>
                <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                <p>Quantidade: {produto.quantidade}</p>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 align-self-center mt-3">
                <div className="input-group">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    type="button"
                    onClick={() => diminuirQuantidade(produto.id)}
                  >
                    <i className="bi-caret-down" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
                  </button>
                  <input
                    type="text"
                    className="form-control text-center border-dark"
                    value={produto.quantidade}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-dark btn-sm"
                    type="button"
                    onClick={() => aumentarQuantidade(produto.id)}
                  >
                    <i className="bi-caret-up" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
                  </button>
                  <button
                    className="btn btn-outline-danger border-dark btn-sm"
                    type="button"
                    onClick={() => removerProduto(produto.id)}
                  >
                    <i className="bi-trash" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
                  </button>
                </div>
                <div className="text-end mt-2">
                  <span className="text-dark">Valor Item: R$ {produto.preco.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
        <li className="list-group-item py-3">
          <div className="text-end">
            <h4 className="text-dark mb-3">Valor Total: R$ {calcularTotal()}</h4>
            <Link to="/" className="btn btn-outline-success btn-lg">
              Ver Mais Produtos
            </Link>
            <Link to="/fimcompra"className="btn btn-danger btn-lg ms-2 mt-xs-3">
              Fechar Compra
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Carrinho;
