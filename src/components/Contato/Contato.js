import React from 'react';

const ContactForm = () => {
  return (
    <main className="flex-fill">
      <div className="container">
        <div className="row justify-content-center">
          <form className="col-sm-10 col-md-8 col-lg-6">
            <h1>Entre em Contato</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                id="txtNomeCompleto"
                className="form-control"
                placeholder=" "
                autoFocus
              />
              <label htmlFor="txtNomeCompleto">Nome Completo</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                id="txtEmail"
                className="form-control"
                placeholder=" "
              />
              <label htmlFor="txtEmail">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                id="txtMensagem"
                className="form-control"
                placeholder=" "
                style={{ height: '200px' }}
              />
              <label htmlFor="txtMensagem">Mensagem</label>
            </div>

            <button
              type="button"
              onClick={() => {
                window.location.href = '/confirmcontato.html';
              }}
              className="btn btn-lg btn-danger"
            >
              Enviar Mensagem
            </button>

            <p className="mt-3">
              Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
            </p>

            <p className="mt-3">
              Atenciosamente,
              <br />
              Central de Relacionamento Caoli Moda Feminina
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
