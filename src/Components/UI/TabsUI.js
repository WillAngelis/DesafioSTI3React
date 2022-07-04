import styled from 'styled-components';

export const TabsUI = styled.section`
  background-color: var(--gray-200);
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  align-items: stretch;

  & a {
    border-bottom: 1px solid var(--gray-200);
    background-color: var(--white);
    color: var(--black);
    font-weight: 400;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 10px 20px;
  }
  a:nth-child(1) {
    border-top-left-radius: 8px;
  }
  a:nth-child(2) {
    border-top-right-radius: 8px;
  }
  & .is_active {
    border-bottom: 2px solid var(--blue-500);
  }
  & a:hover {
    color: var(--blue-500);
  }
  & a.is_active {
    color: var(--blue-500);
  }
`;

export default TabsUI;
