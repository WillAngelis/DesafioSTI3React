import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Dashboard/Header/Header';
import { Table, HeaderTable } from '../../Components/Dashboard/Table/Table';
import Button from '../../Components/UI/Button';
import ContainerUI from '../../Components/UI/ContainerUI';
import TabsUI from '../../Components/UI/TabsUI';
import { PedidosContext } from '../../Contexts/pedidos';
import LoadingGif from '../../Assets/brand/loading.gif';
import { useQuery } from 'react-query';
import { getPedidos } from '../../Hooks/FetchPedidos.js';

export const Home = () => {
  const { pedidos, setPedidos, data } = useContext(PedidosContext);

  const handleConsult = () => {
    setPedidos(data);
  };

  return (
    <>
      <Header></Header>
      <ContainerUI>
        <header>
          <div>
            <h1>Listagem de Produtos</h1>
            <p>Aqui você poderá visualizar todos os pedidos emitidos.</p>
          </div>
          <div>
            <Button
              className={!pedidos ? 'blue disabled' : 'blue'}
              onClick={handleConsult}
            >
              Consultar
            </Button>
          </div>
        </header>
        <TabsUI>
          <Link to={'/'} className="is_active">
            Pedidos
          </Link>
          <Link to={'/maisvendidos'}>Pedidos Mais Vendidos</Link>
        </TabsUI>
        <HeaderTable>
          <Table />
        </HeaderTable>
      </ContainerUI>
    </>
  );
};
