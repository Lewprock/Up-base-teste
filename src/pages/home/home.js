
import './home.css';
import React, { useState } from "react";
import { FaBuilding, FaCalendarAlt, FaUser, FaListAlt } from "react-icons/fa";
import { IoIosSad } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const [button] = useState(true);

  return (
    <div className="container">
      
      {/* Header */}
      <header className="header">
        <button className="back-button">←</button>
        <h3>Bem-vindo, Raphael!</h3>
        <button className="add-button">
        <FaPlus style={{ fontSize: "15px", marginRight: "8px" }} /> <span>Cadastrar Imóvel</span>
        </button>
      </header>

      {/* Filters */}
      <div className="filters">
        <button className="filter active">Todos os flats</button>
        <button className="filter">Indisponíveis</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="no-properties">
    <IoIosSad size={50} color="#6200ea" />
    <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
    <Link to="/newflat">
      <button className="cta-button cadastrar">Cadastrar meu primeiro imóvel</button>
    </Link>
    
      </div>


      
      <nav className="bottom-nav">
    <FaBuilding className="icon" />
    <FaCalendarAlt className="icon" />
    <FaListAlt className="icon" />
    <FaUser className="icon" />
    </nav>
    </div>
  );
};

export default Home;