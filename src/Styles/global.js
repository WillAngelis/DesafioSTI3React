import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */

    --black: #000;
    --white: #fff;
    --gray-50: #f7fafc;  
    --gray-100: #edf2f7; 
    --gray-200: #e2e8f0;
    --gray-500: #718096;
    --gray-700: #2d3748;
    --red-500: #e53e3e;
    --blue-100: #bee3f8;
    --blue-500: #3182ce;
    --blue-900: #1a365d;
    --green-500: #38a169;
    --yellow-100: #fefcbf;
    --yellow-900: #5f370e;
    --orange-100: #feebc8;
    --orange-900: #652b19;
    --toastify-icon-color-success : #fff;
    --toastify-icon-color-warning : #fff;
    --toastify-icon-color-info : #fff;
    /* Font */

    --2xs: 0.625rem;
    --xs: 0.75rem;
    --sm: 0.875rem;
    --md: 1rem;
    --lg: 1.125rem;
    --xl: 1.25rem;

    /* Spacings */
    --1: 0.25rem;
    --2: 0.5rem;
    --3: 0.75rem;
    --4: 1rem;
    --5: 1.25rem;
    --6: 1.5rem;
    --8: 2rem;

    /* Shadows and Radius */

    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06) ”;
    --sm-radius: 0.25rem;
    --md-radius: 0.375rem;
  }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--gray-50);
  }

  body, input, textarea, button{
    font-family: 'Lexend', sans-serif;
    font-weight: 400;
  }


  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

.disabled {
  cursor: none;
  opacity: 0.45;
}

/* Animações */
h1,p{
  -webkit-animation: left-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: left-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.loading{
  position: absolute;
  right: 50px;
  top: 20px;
  width: 100px;
}
.load_text {
  font-size: 10px;
  color: var(--blue-500);
}
.load_gif {
  width: 68px;
}

.load_div {
  position: absolute;
  left: 50%;
  transform: translateX(-50px);
  top: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button{
  -webkit-animation: left-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) alternate;
  animation: left-animate 0.5s cubic-bezier(0.23, 1, 0.32, 1) alternate;
}
@-webkit-keyframes left-animate {
  0% {
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes left-animate {
  0% {
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

}
.cancel-not{
  background-color: var(--red-500);
  color: var(--white);
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lexend', sans-serif;
}
.success-not{
  background-color: var(--green-500);
}

.edit-not{
  background-color: var(--blue-500);
}
.Toastify__progress-bar--success{
  background-color: var(--white);
}
.Toastify__toast-theme--light{
  font-family: 'Lexend', sans-serif;
  color: var(--white);
  font-weight: 600;
  font-size: 14px;
}
.Toastify__progress-bar--warning{
  background-color: var(--white);
}
`;
export default GlobalStyle;
