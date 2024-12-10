
import './new-flat.css';
import React from "react";
import { Link } from 'react-router-dom';


const NewFlat = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/">
          <button className="back-button">&#x2190;</button>
        </Link>
        <h2>Para começarmos, precisamos de alguns dados</h2>
      </header>

      <form className="form-container">
        <label>
          Nome do imóvel
          <input type="text" placeholder="Nome do imóvel" />
          <small>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</small>
        </label>

        <label>
          Descrição
          <textarea maxLength="250" placeholder="Descrição"></textarea>
          <span className="char-count">0/250</span>
        </label>

        <label>
          CEP
          <input type="text" placeholder="CEP" />
        </label>

        <label>
          Endereço
          <input type="text" placeholder="Endereço" />
        </label>

        <div className="form-row">
          <label>
            Número
            <input type="text" placeholder="Número" />
          </label>
          <label>
            Complemento
            <input type="text" placeholder="Complemento" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Cidade
            <input type="text" placeholder="Cidade" />
          </label>
          <label>
            UF
            <select>
              <option value="">Selecione</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
            </select>
          </label>
        </div>

        <button type="submit" className="submit-button">Continuar</button>
      </form>
    </div>
  );
};

export default NewFlat;