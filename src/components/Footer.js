import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-top text-muted bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 text-center">
            <p>&copy;2023- Caoli Moda Feminina Ltda ME</p>
            <p>Desenvolvido por: Larissa Oliveira</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Link to="/privacidade" className="text-decoration-none text-dark">
              Política de Privacidade
            </Link><br />
            <Link to="/termos" className="text-decoration-none text-dark">
              Termos de Uso
            </Link><br />
            <Link to="/quemsomos" className="text-decoration-none text-dark">
                Quem Somos
           </Link><br/>
            <Link to="/troca" className="text-decoration-none text-dark">
              Trocas e Devoluções
            </Link>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Link to="/contat" className="text-decoration-none text-dark">
              Contato pelo Site
            </Link><br />
            E-mail: <a href="mailto:caoli.modafeminina@gmail.com" className="text-decoration-none text-dark">
              caoli.modafeminina@gmail.com
            </a><br />
            Telefone: <a href="tel:79998986653" className="text-decoration-none text-dark">
              (79) 99898-6653
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
