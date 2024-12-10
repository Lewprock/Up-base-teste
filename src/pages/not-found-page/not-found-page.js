
import './not-found-page.css';
import React from "react";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="not-found">Página não encontrada</div>
      <Link to="/">
        <button type="submit" className="submit-button">Voltar</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;