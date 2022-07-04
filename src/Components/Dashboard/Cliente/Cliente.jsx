import React, { useEffect, useState } from 'react';
import '../Form/style.css';
import { numberFormat } from '../../../Hooks/NumberFormat';

export default function Cliente({ id }) {
  const [pedido, setPedido] = useState([]);
  const [endereco, setEndereco] = useState([]);

  useEffect(() => {
    const pedidos = JSON.parse(localStorage.getItem('Pedidos'));
    setPedido(pedidos[id - 1]);
    setEndereco(pedidos[id - 1].enderecoEntrega);
  }, []);

  function retornaData(params) {
    let dateTotal = Date.parse(params);
    const semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
    let dataPed = new Date(params);

    const dataDiaNum = ('0' + dataPed.getDate()).slice(-2);
    const dataDiaSemana = dataPed.getDay();
    const anoDaCompra = dataPed.getFullYear();
    const meses = ('0' + (dataPed.getMonth() + 1)).slice(-2);
    let dataFinal = `
      ${
        semana[dataDiaSemana]
      }, ${dataDiaNum}/${meses}/${anoDaCompra} - ${dataPed.toLocaleTimeString()}`;

    return dataFinal;
  }
  return (
    <>
      <div>
        <h2 className="venda_num">Venda nº{id}</h2>
        <div>
          <span>Data:</span>
          <p>{retornaData(pedido.dataCriacao)}</p>
        </div>
        <div>
          <span>Status:</span>
          <p>{pedido.status}</p>
        </div>
        <div>
          <span>Desconto:</span>
          <p>{numberFormat(pedido.desconto)}</p>
        </div>
        <div>
          <span>Frete:</span>
          <p>{numberFormat(pedido.frete)}</p>
        </div>
        <div>
          <span>Subtotal:</span>
          <p>{numberFormat(pedido.subTotal)}</p>
        </div>
        <div>
          <span>Total:</span>
          <p>{numberFormat(pedido.valorTotal)}</p>
        </div>
        <div>
          <span className="info_endereco">Endereço de entrega:</span>
          <p className="info_endereco">
            {endereco.endereco},{endereco.numero}-{endereco.bairro}-
            {endereco.cidade}({endereco.estado})
          </p>
        </div>
      </div>
    </>
  );
}
