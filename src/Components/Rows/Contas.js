import React from 'react';
import styles from '../Table.module.css';
import { GlobalContext } from '../GlobalContext';

const Contas = () => {
  const global = React.useContext(GlobalContext);

  const [contas, setContas] = React.useState(false);
  function clickContas() {
    setContas((active) => !active);
  }

  function handleCliente({ target }) {
    if (target.checked) {
      global.setCliente([...global.cliente, target.value]);
    } else {
      global.setCliente(global.cliente.filter((item) => item !== target.value));
    }
  }

  function handleTransacoes({ target }) {
    if (target.checked) {
      global.setTransacoes([...global.transacoes, target.value]);
    } else {
      global.setTransacoes(
        global.transacoes.filter((item) => item !== target.value),
      );
    }
  }

  function handleContasDigitais({ target }) {
    if (target.checked) {
      global.setContasDigitais([...global.contasDigitais, target.value]);
    } else {
      global.setContasDigitais(
        global.contasDigitais.filter((item) => item !== target.value),
      );
    }
  }

  function handleChecked({ target }) {
    if (target.checked) {
      if (!global.cliente.includes(target.value)) {
        global.setCliente([...global.cliente, target.value]);
      }
      if (!global.transacoes.includes(target.value)) {
        global.setTransacoes([...global.transacoes, target.value]);
      }
      if (!global.contasDigitais.includes(target.value)) {
        global.setContasDigitais([...global.contasDigitais, target.value]);
      }
    } else {
      global.setCliente(global.cliente.filter((item) => item !== target.value));
      global.setTransacoes(
        global.transacoes.filter((item) => item !== target.value),
      );
      global.setContasDigitais(
        global.contasDigitais.filter((item) => item !== target.value),
      );
    }
  }

  return (
    <>
      <tr className={styles.topic}>
        <th scope="col" onClick={clickContas}>
          Contas
        </th>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Ver listagem"
            checked={
              !global.cliente.includes('Ver listagem') ||
              !global.transacoes.includes('Ver listagem') ||
              !global.contasDigitais.includes('Ver listagem')
                ? false
                : true
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Ver detalhes"
            checked={
              !global.cliente.includes('Ver detalhes') ||
              !global.transacoes.includes('Ver detalhes') ||
              !global.contasDigitais.includes('Ver detalhes')
                ? false
                : true
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Criar"
            checked={
              !global.cliente.includes('Criar') ||
              !global.transacoes.includes('Criar') ||
              !global.contasDigitais.includes('Criar')
                ? false
                : true
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Editar"
            checked={
              !global.cliente.includes('Editar') ||
              !global.transacoes.includes('Editar') ||
              !global.contasDigitais.includes('Editar')
                ? false
                : true
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Deletar"
            checked={
              !global.cliente.includes('Deletar') ||
              !global.transacoes.includes('Deletar') ||
              !global.contasDigitais.includes('Deletar')
                ? false
                : true
            }
          />
        </td>
      </tr>
      {contas ? (
        <>
          <tr className={styles.subtopic}>
            <th scope="col">Cliente</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleCliente}
                checked={global.cliente.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleCliente}
                checked={global.cliente.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleCliente}
                checked={global.cliente.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleCliente}
                checked={global.cliente.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleCliente}
                checked={global.cliente.includes('Deletar')}
              />
            </td>
          </tr>

          <tr className={styles.subtopic}>
            <th scope="col">Transações</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleTransacoes}
                checked={global.transacoes.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleTransacoes}
                checked={global.transacoes.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleTransacoes}
                checked={global.transacoes.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleTransacoes}
                checked={global.transacoes.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleTransacoes}
                checked={global.transacoes.includes('Deletar')}
              />
            </td>
          </tr>

          <tr className={styles.subtopic}>
            <th scope="col">Contas digitais</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleContasDigitais}
                checked={global.contasDigitais.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleContasDigitais}
                checked={global.contasDigitais.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleContasDigitais}
                checked={global.contasDigitais.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleContasDigitais}
                checked={global.contasDigitais.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleContasDigitais}
                checked={global.contasDigitais.includes('Deletar')}
              />
            </td>
          </tr>
        </>
      ) : null}
    </>
  );
};

export default Contas;
