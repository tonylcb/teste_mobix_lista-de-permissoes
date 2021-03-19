import React from 'react';
import styles from '../Table.module.css';
import { GlobalContext } from '../GlobalContext';

const Analise = () => {
  const global = React.useContext(GlobalContext);

  const [analise, setAnalise] = React.useState(false);
  function clickAnalise() {
    setAnalise((active) => !active);
  }

  function handleAnaliseDeContas({ target }) {
    if (target.checked) {
      global.setAnaliseDeContas([...global.analiseDeContas, target.value]);
    } else {
      global.setAnaliseDeContas(
        global.analiseDeContas.filter((item) => item !== target.value),
      );
    }
  }

  function handleAnaliseDeTransacoes({ target }) {
    if (target.checked) {
      global.setAnaliseDeTransacoes([
        ...global.analiseDeTransacoes,
        target.value,
      ]);
    } else {
      global.setAnaliseDeTransacoes(
        global.analiseDeTransacoes.filter((item) => item !== target.value),
      );
    }
  }

  function handleChecked({ target }) {
    if (target.checked) {
      if (!global.analiseDeContas.includes(target.value)) {
        global.setAnaliseDeContas([...global.analiseDeContas, target.value]);
      }
      if (!global.analiseDeTransacoes.includes(target.value)) {
        global.setAnaliseDeTransacoes([
          ...global.analiseDeTransacoes,
          target.value,
        ]);
      }
    } else {
      global.setAnaliseDeContas(
        global.analiseDeContas.filter((item) => item !== target.value),
      );
      global.setAnaliseDeTransacoes(
        global.analiseDeTransacoes.filter((item) => item !== target.value),
      );
    }
  }

  return (
    <>
      <tr className={styles.topic}>
        <th scope="col" onClick={clickAnalise}>
          Análise
        </th>
        <td>
          <input
            type="checkbox"
            onChange={handleChecked}
            value="Ver listagem"
            checked={
              !global.analiseDeContas.includes('Ver listagem') ||
              !global.analiseDeTransacoes.includes('Ver listagem')
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
              !global.analiseDeContas.includes('Ver detalhes') ||
              !global.analiseDeTransacoes.includes('Ver detalhes')
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
              !global.analiseDeContas.includes('Criar') ||
              !global.analiseDeTransacoes.includes('Criar')
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
              !global.analiseDeContas.includes('Editar') ||
              !global.analiseDeTransacoes.includes('Editar')
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
              !global.analiseDeContas.includes('Deletar') ||
              !global.analiseDeTransacoes.includes('Deletar')
                ? false
                : true
            }
          />
        </td>
      </tr>

      {analise ? (
        <>
          <tr className={styles.subtopic}>
            <th scope="col">Análise de contas</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleAnaliseDeContas}
                checked={global.analiseDeContas.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleAnaliseDeContas}
                checked={global.analiseDeContas.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleAnaliseDeContas}
                checked={global.analiseDeContas.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleAnaliseDeContas}
                checked={global.analiseDeContas.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleAnaliseDeContas}
                checked={global.analiseDeContas.includes('Deletar')}
              />
            </td>
          </tr>
          <tr className={styles.subtopic}>
            <th scope="col">Análise de transações</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleAnaliseDeTransacoes}
                checked={global.analiseDeTransacoes.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleAnaliseDeTransacoes}
                checked={global.analiseDeTransacoes.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleAnaliseDeTransacoes}
                checked={global.analiseDeTransacoes.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleAnaliseDeTransacoes}
                checked={global.analiseDeTransacoes.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleAnaliseDeTransacoes}
                checked={global.analiseDeTransacoes.includes('Deletar')}
              />
            </td>
          </tr>
        </>
      ) : null}
    </>
  );
};

export default Analise;
