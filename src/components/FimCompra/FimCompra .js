// FimCompra.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const FimCompra = () => {
  const location = useLocation();
  const total = location.state && location.state.total;
  return (
    <div className="flex-fill">
      <div className="container text-center">
        <h1>Obrigada!</h1>
        <hr />
        <h3>Anote o número do seu pedido:</h3>
        <h2 className="text-danger">
          <strong>000123</strong>
          {total && (
            <p>Valor Total: R$ {total}</p>
          )}
        </h2>
        <p>
          Em até 2 horas, seu pedido será entregue. Qualquer dúvida sobre este pedido,
          entre em contato conosco e informe o número do pedido para que possamos te ajudar.
        </p>
        <p>Tenha um ótimo dia!</p>
        <p>
          Atenciosamente,
          <br />
          Equipe Caoli Moda Feminina!
        </p>
      </div>
    </div>
  );
};

export default FimCompra;
