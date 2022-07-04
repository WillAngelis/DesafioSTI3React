import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: calc(100% - 6.5rem);
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1.5rem;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    border-left: 2px solid var(--black);
    color: var(--black);
    font-size: 1.125rem;
    padding: 0 10px;
  }

  img {
    margin-right: 10px;
    width: 69px;
  }
  img,
  h2 {
    -webkit-animation: top-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: top-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
  @-webkit-keyframes top-animate {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes top-animate {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Container;
