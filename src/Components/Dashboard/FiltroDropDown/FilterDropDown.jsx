import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PedidosContext } from '../../../Contexts/pedidos';

import './style.css';

export const FilterDropDown = ({ filtro }) => {
  const { topPedidos, setTopPedidos } = useContext(PedidosContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="select-menu">
      <div className="select-btn" onClick={(e) => setOpen(!open)}>
        <span className="sBtn-text">{filtro}</span>
      </div>
      <ul className={open ? 'options open  ' : 'options closed'}>
        <Link to={'/maisvendidos/unidades'} className="option">
          <span>Unidades Vendidas</span>
        </Link>
        <Link to={'/maisvendidos/ordem_alfabetica'} className="option">
          <span>Ordem Alfabética</span>
        </Link>
        <Link to={'/maisvendidos/valor_total'} className="option">
          <span>Valor Total em R$</span>
        </Link>
      </ul>
    </div>
  );
};
