import React, { useContext, useRef } from 'react';
import Cancelado from '../../../Assets/svg/cancelar.svg';
import Editar from '../../../Assets/svg/editar.svg';
import Aprovado from '../../../Assets/svg/ok.svg';
import './style.css';
import { Link } from 'react-router-dom';
import LoadingGif from '../../../Assets/brand/loading.gif';
import { PedidosContext } from '../../../Contexts/pedidos';
import { useQuery } from 'react-query';
import { getPedidos } from '../../../Hooks/FetchPedidos.js';
import { numberFormat } from '../../../Hooks/NumberFormat';

export const HeaderTable = ({ children }) => {
  return (
    <div className="table_header">
      <table className="table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Email</th>
            <th>Status</th>
            <th>Nome do cliente</th>
            <th>Valor</th>
            <th>Frete</th>
            <th>Desconto</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <Table />
        </tbody>
      </table>
    </div>
  );
};

export const Table = () => {
  const { pedidos, setPedidos } = useContext(PedidosContext);

  if (!pedidos) {
    const { data } = useQuery('pedidos', getPedidos(), {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        localStorage.setItem('Pedidos', JSON.stringify(data));
        setPedidos(data);
      },
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!pedidos)
    return (
      <tr>
        <td>
          <div className="load_div">
            <img className="load_gif" src={LoadingGif} alt="" />
            <span className="load_text">Carregando</span>
          </div>
        </td>
      </tr>
    );
  return (
    <>
      {pedidos?.map(
        ({
          cliente,
          status,
          desconto,
          frete,
          subTotal,
          valorTotal,
          numero,
        }) => (
          <tr key={numero}>
            <td>{numero}</td>
            <td>{cliente.email}</td>

            <td>
              {status == 'APROVADO' ? (
                <img src={Aprovado} alt="" />
              ) : (
                <img src={Cancelado} alt="" />
              )}
              <span className={status.toLowerCase()}>
                {capitalizeFirstLetter(status.toLowerCase())}
              </span>
            </td>
            <td>{cliente.nome}</td>
            <td>{numberFormat(subTotal)}</td>
            <td>{numberFormat(frete)}</td>
            <td>{numberFormat(desconto)}</td>
            <td>{numberFormat(valorTotal)}</td>
            <td className="col_edit">
              <Link className="btn_edit" to={'/alterar/' + numero}>
                <img src={Editar} alt="" />
              </Link>
            </td>
          </tr>
        )
      )}
    </>
  );
};
