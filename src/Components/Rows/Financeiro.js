import React from 'react';
import styles from '../Table.module.css';
import { GlobalContext } from '../GlobalContext';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Financeiro = () => {
  const global = React.useContext(GlobalContext);

  const [financeiro, setFinanceiro] = React.useState(false);

  function clickFinanceiro() {
    setFinanceiro((active) => !active);
  }

  function handleEntradas({ target }) {
    if (target.checked) {
      global.setEntradas([...global.entradas, target.value]);
    } else {
      global.setEntradas(
        global.entradas.filter((item) => item !== target.value),
      );
    }
  }
  function handleChecked({ target }) {
    if (target.checked) {
      if (!global.entradas.includes(target.value)) {
        global.setEntradas([...global.entradas, target.value]);
      }
    } else {
      global.setEntradas(
        global.entradas.filter((item) => item !== target.value),
      );
    }
  }
  return (
    <>
      <tr className={styles.topic}>
        <th scope="col" onClick={clickFinanceiro}>
          Financeiro{' '}
          {financeiro ? (
            <IoIosArrowUp className={styles.icon} />
          ) : (
            <IoIosArrowDown className={styles.icon} />
          )}
        </th>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Ver listagem"
            checked={!global.entradas.includes('Ver listagem') ? false : true}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Ver detalhes"
            checked={!global.entradas.includes('Ver detalhes') ? false : true}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Criar"
            checked={!global.entradas.includes('Criar') ? false : true}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Editar"
            checked={!global.entradas.includes('Editar') ? false : true}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Deletar"
            checked={!global.entradas.includes('Deletar') ? false : true}
          />
        </td>
      </tr>

      {financeiro ? (
        <>
          <tr className={styles.subtopic} financeiro={financeiro}>
            <th scope="col">Entradas</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleEntradas}
                checked={global.entradas.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleEntradas}
                checked={global.entradas.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleEntradas}
                checked={global.entradas.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleEntradas}
                checked={global.entradas.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleEntradas}
                checked={global.entradas.includes('Deletar')}
              />
            </td>
          </tr>
        </>
      ) : null}
    </>
  );
};

export default Financeiro;
