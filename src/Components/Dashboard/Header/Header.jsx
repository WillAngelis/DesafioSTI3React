import React, { useEffect } from 'react';
import { Container } from './style.js';
import './style.js';
import Logo from '../../../Assets/brand/STi3 Logo.svg';
import useDataAtual from '../../../Hooks/useDataAtual';

export const Header = () => {
  const { dataAtual, getDate } = useDataAtual();

  useEffect(() => {
    getDate();
  }, [dataAtual]);

  return (
    <Container>
      <div>
        <img src={Logo} alt="logo STI3" />
        <hr></hr>
        <h2>Feito por Will de Angelis</h2>
      </div>
      <h3>{dataAtual}</h3>
    </Container>
  );
};
