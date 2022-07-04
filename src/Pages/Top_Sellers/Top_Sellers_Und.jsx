import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Dashboard/Header/Header';
import { Table, HeaderTable } from '../../Components/Dashboard/Table/Table';
import Button from '../../Components/UI/Button';
import ContainerUI from '../../Components/UI/ContainerUI';
import TabsUI from '../../Components/UI/TabsUI';
import { TopSellers } from '../../Components/Dashboard/TopSellers/TopSellers';
import { FilterDropDown } from '../../Components/Dashboard/FiltroDropDown/FilterDropDown';
import './style.css';

export const Top_Sellers_Und = () => {
  return (
    <>
      <Header></Header>
      <ContainerUI>
        <header>
          <div>
            <h1>Produtos mais vendidos</h1>
            <p>
              Aqui você poderá observar um ranking com os produtos mais vendidos
            </p>
          </div>
        </header>
        <TabsUI>
          <Link to={'/'}>Pedidos</Link>
          <Link to={'/maisvendidos'} className="is_active">
            Pedidos Mais Vendidos
          </Link>
        </TabsUI>
        <div className="top_sellers">
          <FilterDropDown filtro="Unidades Vendidas" />
          <TopSellers />
        </div>
      </ContainerUI>
    </>
  );
};
