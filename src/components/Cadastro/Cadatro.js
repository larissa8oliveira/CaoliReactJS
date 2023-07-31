import React, { useState } from 'react';

const Cadastro = () => {

  const [dadosCadastro, setDadosCadastro] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    cep: '',
    numero: '',
    complemento: '',
    referencia: '',
    senha: '',
    confirmacaoSenha: '',
    receberPromocoes: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setDadosCadastro((prevDados) => ({
      ...prevDados,
      [name]: newValue,
    }));
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificando se todos os campos estão preenchidos
    const camposPreenchidos = Object.values(dadosCadastro).every((value) => value !== '');
    if (camposPreenchidos) {
      // Exibindo alerta de cadastro realizado
      alert('Cadastro realizado com sucesso!');
       window.location.href = '/login';
         
    } else {
      alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  return (
  
    <div className="container">
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <fieldset className="row gx-3">
            <legend>Dados Pessoais</legend>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                id="txtNome"
                name="nome"
                value={dadosCadastro.nome}
                onChange={handleInputChange}
                placeholder=" "
                autoFocus
              />
              <label htmlFor="txtNome">Nome</label>
            </div>
            <div className="form-floating mb-3 col-md-6 col-xl-4">
              <input
                className="form-control"
                type="text"
                id="txtCPF"
                name="cpf"
                value={dadosCadastro.cpf}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtCPF">CPF</label>
            </div>
            <div className="form-floating mb-3 col-md-6 col-xl-4">
              <input
                className="form-control"
                type="date"
                id="txtDataNascimento"
                name="dataNascimento"
                value={dadosCadastro.dataNascimento}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtDataNascimento" className="d-inline d-sm-none d-md-inline d-lg-none">
                Data Nascimento
              </label>
              <label htmlFor="txtDataNascimento" className="d-none d-sm-inline d-md-none d-lg-inline">
                Data de Nascimento
              </label>
            </div>
            {/* Restante dos campos de dados pessoais */}
            <div className="form-floating mb-3 col-md-8">
              <input
                className="form-control"
                type="email"
                id="txtEmail"
                name="email"
                value={dadosCadastro.email}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtEmail">E-mail</label>
            </div>
            <div className="form-floating mb-3 col-md-6">
              <input
                className="form-control"
                type="text"
                id="txtTelefone"
                name="telefone"
                value={dadosCadastro.telefone}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtTelefone">Telefone</label>
            </div>
          </fieldset>
        </div>
        <div className="col-sm-12 col-md-6">
          <fieldset className="row gx-3">
            <legend>Endereço</legend>
            <div className="form-floating mb-3 col-md-6 col-lg-4">
              <input
                className="form-control"
                type="text"
                id="txtCEP"
                name="cep"
                value={dadosCadastro.cep}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtCEP">CEP</label>
            </div>
            <div className="mb-3 col-md-6 col-lg-8 align-self-end">
              <textarea
                className="form-control text-muted bg-light"
                style={{ height: '58px', fontSize: '14px' }}
                disabled
              >
                Digite o CEP para buscarmos o endereço.
              </textarea>
            </div>
            <div className="clearfix"></div>
            <div className="form-floating mb-3 col-md-4">
              <input
                className="form-control"
                type="text"
                id="txtNumero"
                name="numero"
                value={dadosCadastro.numero}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtNumero">Número</label>
            </div>
            <div className="form-floating mb-3 col-md-8">
              <input
                className="form-control"
                type="text"
                id="txtComplemento"
                name="complemento"
                value={dadosCadastro.complemento}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtComplemento">Complemento</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                id="txtReferencia"
                name="referencia"
                value={dadosCadastro.referencia}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtReferencia">Referência</label>
            </div>
          </fieldset>
          <fieldset className="row gx-3">
            <legend>Senha de Acesso</legend>
            <div className="form-floating mb-3 col-lg-6">
              <input
                className="form-control"
                type="password"
                id="txtSenha"
                name="senha"
                value={dadosCadastro.senha}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="txtSenha">Senha</label>
            </div>
            <div className="form-floating mb-3 col-lg-6">
              <input
                className="form-control"
                id="txtConfirmacaoSenha"
                name="confirmacaoSenha"
                value={dadosCadastro.confirmacaoSenha}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label className="form-label" htmlFor="txtConfirmacaoSenha">
                Confirmação da Senha
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <hr />
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={dadosCadastro.receberPromocoes}
          id="flexCheckDefault"
          name="receberPromocoes"
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Desejo receber informações sobre promoções.
        </label>
      </div>
      <div className="mb-3 text-left">
        <a className="btn btn-lg btn-light btn-outline-danger" href="/">
          Cancelar
        </a>
        <input type="submit" value="Criar meu cadastro" className="btn btn-lg btn-danger" />
      </div>
    </form>
    </div>

  );
};

export default Cadastro;
