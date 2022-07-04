import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getPedidos } from '../../../Hooks/FetchPedidos';
import './style.css';
import { SumProducts } from '../../../Hooks/SumProducts.js';
import { SumValores } from '../../../Hooks/SumValores.js';
import LoadingGif from '../../../Assets/brand/loading.gif';
import { PedidosContext } from '../../../Contexts/pedidos';

export const SellersAlfab = () => {
  const { topPedidos, setTopPedidos } = useContext(PedidosContext);
  const [valorTotal, setValorTotal] = useState([]);
  const [ordemAlfabetica, setOrdemAlfabetica] = useState([]);

  const { data, isLoading } = useQuery('pedido', getPedidos(), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      const produtos = [];
      const pedido = data?.map(({ cliente, itens }) => {
        itens.map(({ nome, quantidade, valorUnitario }) => {
          produtos.push({ nome, quantidade, valorUnitario });
        });
      });

      let listaPedidos = [];
      for (let i = 0; i < produtos.length; i++) {
        let id = i;
        const nome = produtos[i].nome;
        let obj = {
          id: id,
          nome: nome,
          quantidade: SumProducts(nome, produtos),
          valorUnitario: SumValores(nome, produtos),
        };
        listaPedidos.push(obj);
        id++;
      }
      const produtosFiltrados = [];

      const listaFiltrada = listaPedidos.filter((element) => {
        const valorDuplicado = produtosFiltrados.includes(element.nome);
        if (!valorDuplicado) {
          produtosFiltrados.push(element.nome);
          return true;
        }
        return false;
      });

      let listaAlfabetica = listaFiltrada.sort(function (a, b) {
        return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
      });

      setOrdemAlfabetica(listaAlfabetica);
    },
  });
  if (!ordemAlfabetica)
    return (
      <div className="load_div">
        <img className="load_gif" src={LoadingGif} alt="" />
        <span className="load_text">Carregando</span>
      </div>
    );
  return (
    <div className="table_sells">
      {ordemAlfabetica.map(({ nome, quantidade, valorUnitario }, index) => (
        <div className={'podium_place place'} key={index}>
          <h2>{index + 1}</h2>
          <h4>{nome}</h4>
          <p>
            Vendido <span>{quantidade}</span> {quantidade > 1 ? 'vezes' : 'vez'}
          </p>
          <p>
            Resultou em{' '}
            <span>
              {valorUnitario.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
