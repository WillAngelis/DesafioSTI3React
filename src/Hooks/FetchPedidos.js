export const getPedidos = () => () =>
  fetch(
    'https://justcors.com/tl_5ea75a1/https://desafiotecnicosti3.azurewebsites.net/pedido'
  ).then((res) => res.json());
