import React from 'react';

const Login = () => {
  const handleEntrarClick = () => {
    // Lógica para autenticar o usuário e redirecionar para a página de pedidos
    window.location.href = '/cliente_pedidos.html';
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-sm-10 col-md-8 col-lg-6">
          <h1>Identifique-se</h1>

          <div className="form-floating mb-3">
            <input type="email" id="txtEmail" className="form-control" placeholder=" " autoFocus />
            <label htmlFor="txtEmail">E-mail</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" id="txtSenha" className="form-control" placeholder=" " />
            <label htmlFor="txtSenha">Senha</label>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" value="" id="chkLembrar" />
            <label htmlFor="chkLembrar" className="form-check-label">
              Lembrar de mim
            </label>
          </div>

          <button type="button" onClick={handleEntrarClick} className="btn btn-lg btn-danger">
            Entrar
          </button>

          <p className="mt-3">
            Ainda não é cadastrado? <a href="/cadastro">Clique aqui</a> para se cadastrar.
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
