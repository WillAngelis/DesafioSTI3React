export const SumProducts = (nome, produtos) => {
  return produtos.reduce((sum, e) => {
    e.nome == nome ? (sum += e.quantidade) : (sum += 0);
    return sum;
  }, 0);
};
