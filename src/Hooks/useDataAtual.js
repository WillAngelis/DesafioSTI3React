import { useState } from 'react';

const useDataAtual = () => {
  const [dataAtual, setDataAtual] = useState('');

  const getDate = () => {
    const date = new Date();
    const diaEmNum = date.getDate();
    const dia = date.getDay();
    const mes = date.getMonth();

    const semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
    const meses = new Array(
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    );

    setDataAtual(`${semana[dia]}, ${diaEmNum}  ${meses[mes]}`);
  };
  return { dataAtual, getDate };
};

export default useDataAtual;
