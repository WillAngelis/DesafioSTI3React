import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  width: 135px;
  height: 48px;
  cursor: pointer;

  &.blue {
    background-color: var(--blue-500);
    color: #fff;
    &.disable {
      cursor: not-allowed;
      filter: grayscale(1) brightness(0.8);
    }
  }
  &.btn {
    height: 48px;
    padding: 10.5px 12px;
    border: none;
    border-radius: var(--sm-radius);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    min-width: 205px;
  }

  &.red {
    border: 1px solid var(--red-500);
    background-color: none;
    margin: 0 15px;
    color: var(--red-500);
  }
  &.green {
    background-color: var(--green-500);
    color: #fff;
  }
`;

export default Button;
