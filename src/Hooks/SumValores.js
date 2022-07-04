export const SumValores = (nome, produtos) => {
  return produtos.reduce((sum, e) => {
    e.nome == nome ? (sum += e.valorUnitario) : (sum += 0);
    return sum;
  }, 0);
};
