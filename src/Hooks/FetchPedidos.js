export const getPedidos = () => () =>
  fetch('https://desafiotecnicosti3.azurewebsites.net/pedido').then((res) =>
    res.json()
  );
