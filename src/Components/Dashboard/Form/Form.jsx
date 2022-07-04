import React, { useEffect, useRef, useState, useContext } from 'react';
import ButtonUI from '../../UI/Button.js';
import { PedidosContext } from '../../../Contexts/pedidos';
import './style.css';
import { useQuery } from 'react-query';
import { getPedidos } from '../../../Hooks/FetchPedidos.js';

export default function Form({ id, pedidos }) {
  const { setPedidos, isDisabled, handleSubmit, clientePed, setClientePed } =
    useContext(PedidosContext);

  const { cliente } = pedidos[id - 1];
  const [dados, setDados] = useState(cliente);

  useEffect(() => {
    const pedidosCliente = JSON.parse(localStorage.getItem('Pedidos'));

    setClientePed({
      nome: cliente.nome,
      email: cliente.email,
      cpf: cliente.cpf,
    });

    if (!isDisabled) {
      setClientePed({ ...clientePed, nome: '', email: '', cpf: '' });
      inputRef.current.focus();
    }
  }, [isDisabled]);

  const inputRef = useRef(null);

  function handleChange(e) {
    setClientePed({ ...clientePed, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form>
        <h2> Informações do cliente</h2>
        <label htmlFor="nome">Nome *</label>
        <input
          ref={inputRef}
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          name="nome"
          value={clientePed.nome}
          onChange={handleChange}
          className="input input_nome"
          disabled={isDisabled ? true : false}
        />
        <label htmlFor="email">E-mail *</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email"
          name="email"
          value={clientePed.email}
          onChange={handleChange}
          className="input input_email"
          disabled={isDisabled ? true : false}
        />
        <label htmlFor="cpf">CPF *</label>
        <input
          id="cpf"
          type="number"
          placeholder="000.000.000-00"
          name="cpf"
          value={clientePed.cpf}
          onChange={handleChange}
          className="input input_cpf"
          disabled={isDisabled ? true : false}
        />
      </form>
    </>
  );
}
