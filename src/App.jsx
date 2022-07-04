import React, { useState, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Edit } from './Pages/Edit/Edit';
import { Home } from './Pages/Home/Home';
import GlobalStyle from './Styles/global';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Top_Sellers_Und } from './Pages/Top_Sellers/Top_Sellers_Und';
import { Top_Sellers_Valor } from './Pages/Top_Sellers/Top_Sellers_Valor';
import { Top_Sellers_Alfab } from './Pages/Top_Sellers/Top_Sellers_Alfab';
import { Top_Sellers } from './Pages/Top_Sellers/Top_Sellers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PedidosContext } from './Contexts/pedidos';

function App() {
  const [pedidos, setPedidos] = useState(null);
  const [topPedidos, setTopPedidos] = useState(null);
  const [valorTotal, setValorTotal] = useState(null);
  const [ordemAlfabetica, setOrdemAlfabetica] = useState(null);
  const [loadingGif, setLoadingGif] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [idNumber, setIdNumber] = useState(0);
  const [clientePed, setClientePed] = useState({
    nome: '',
    email: '',
    cpf: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...pedidos];
    newTodos[idNumber].cliente = {
      ...newTodos[idNumber].cliente,
      nome: clientePed.nome,
      cpf: clientePed.cpf,
      email: clientePed.email,
    };
    setPedidos(newTodos);
  };

  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <PedidosContext.Provider
        value={{
          pedidos,
          setPedidos,
          valorTotal,
          setValorTotal,
          ordemAlfabetica,
          setOrdemAlfabetica,
          topPedidos,
          setTopPedidos,
          setLoadingGif,
          loadingGif,
          isDisabled,
          setDisabled,
          handleSubmit,
          idNumber,
          setIdNumber,
          clientePed,
          setClientePed,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="alterar/:id" element={<Edit />} />
            <Route path="maisvendidos/" element={<Top_Sellers />} />

            <Route path="maisvendidos/unidades" element={<Top_Sellers_Und />} />
            <Route
              path="maisvendidos/valor_total"
              element={<Top_Sellers_Valor />}
            />
            <Route
              path="maisvendidos/ordem_alfabetica"
              element={<Top_Sellers_Alfab />}
            />
          </Routes>
        </Router>
      </PedidosContext.Provider>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider>
  );
}

export default App;
