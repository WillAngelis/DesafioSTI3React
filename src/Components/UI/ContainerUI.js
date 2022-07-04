import styled from 'styled-components';

export const ContainerUI = styled.section`
  margin: 0 auto;
  background-color: var(--gray-100);
  max-width: calc(100% - 10rem);
  border-radius: 6px;
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & a {
    text-decoration: none;
  }

  & header h1 {
    margin-bottom: 20px;
  }

  & header p {
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-700);
    margin: 0.5rem 0;
  }

  & header {
    display: flex;
    justify-content: space-between;
  }

  & header span {
    font-size: 1rem;
  }

  & .display {
    display: flex;
  }
`;

export default ContainerUI;
