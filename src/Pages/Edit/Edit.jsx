import React, { useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ContainerUI from '../../Components/UI/ContainerUI.js';
import { Header } from '../../Components/Dashboard/Header/Header';
import ButtonUI from '../../Components/UI/Button.js';
import Cliente from '../../Components/Dashboard/Cliente/Cliente';
import Form from '../../Components/Dashboard/Form/Form';
import { PedidosContext } from '../../Contexts/pedidos';
import { toast } from 'react-toastify';

export const Edit = () => {
  const notify = () =>
    toast.warn('As alterações foram canceladas', {
      position: 'bottom-right',
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'cancel-not',
    });
  const notifySucess = () =>
    toast.success('As alterações foram concluidas', {
      position: 'bottom-right',
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'success-not',
    });
  const notifyEdit = () =>
    toast.info('Você está editando o pedido', {
      position: 'bottom-right',
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'edit-not',
    });
  const {
    setDisabled,
    isDisabled,
    idNumber,
    setIdNumber,
    handleSubmit,
    pedidos,
  } = useContext(PedidosContext);
  let { id } = useParams();
  useEffect(() => {
    setIdNumber(id);
  }, [id]);
  const history = useNavigate();

  const handleClick = () => {
    setDisabled((prevStatus) => !prevStatus);
    notifyEdit();
  };

  const handleCancel = () => {
    setDisabled(true);
    notify();
    history('/');
  };
  const handleSave = () => {
    notifySucess();
    history('/');
  };

  return (
    <>
      <Header />
      <ContainerUI>
        <header>
          <div>
            <h1>
              <span>Listagem de pedidos</span> > Alteração de pedidos
            </h1>
            <p>
              Aqui você poderá visualizar as informações do pedido e editar as
              informações do cliente.
            </p>
          </div>
          <div className="display">
            <ButtonUI className="btn blue" onClick={handleClick}>
              Editar Informações
            </ButtonUI>
            <Link to="/">
              <ButtonUI className="btn red" onClick={handleCancel}>
                Cancelar Alterações
              </ButtonUI>
            </Link>
            <Link to="/">
              <ButtonUI
                className="btn green"
                onClick={(e) => {
                  handleSubmit(e);
                  handleSave();
                }}
                onSubmit={handleSave}
              >
                Salvar Alterações
              </ButtonUI>
            </Link>
          </div>
        </header>
        <div className="tabs_body">
          <div className="edit_info_container">
            <Cliente id={id} />
            <Form id={id} pedidos={pedidos} />
          </div>
        </div>
      </ContainerUI>
    </>
  );
};
