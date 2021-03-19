import React from 'react';
import Analise from './Rows/Analise';
import Contas from './Rows/Contas';
import Customizacao from './Rows/Customizacao';
import Financeiro from './Rows/Financeiro';
import styles from './Table.module.css';
import { GlobalContext } from './GlobalContext';

const Table = () => {
  const global = React.useContext(GlobalContext);

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
      if (!global.cliente.includes(target.value)) {
        global.setCliente([...global.cliente, target.value]);
      }
      if (!global.transacoes.includes(target.value)) {
        global.setTransacoes([...global.transacoes, target.value]);
      }
      if (!global.contasDigitais.includes(target.value)) {
        global.setContasDigitais([...global.contasDigitais, target.value]);
      }
      if (!global.limitesEHorarios.includes(target.value)) {
        global.setLimitesEHorarios([...global.limitesEHorarios, target.value]);
      }
      if (!global.tarifas.includes(target.value)) {
        global.setTarifas([...global.tarifas, target.value]);
      }
      if (!global.tarifasPersonalizadas.includes(target.value)) {
        global.setTarifasPersonalizadas([
          ...global.tarifasPersonalizadas,
          target.value,
        ]);
      }
      if (!global.conta.includes(target.value)) {
        global.setConta([...global.conta, target.value]);
      }
      if (!global.entradas.includes(target.value)) {
        global.setEntradas([...global.entradas, target.value]);
      }
    } else {
      global.setAnaliseDeContas(
        global.analiseDeContas.filter((item) => item !== target.value),
      );
      global.setAnaliseDeTransacoes(
        global.analiseDeTransacoes.filter((item) => item !== target.value),
      );
      global.setCliente(global.cliente.filter((item) => item !== target.value));
      global.setTransacoes(
        global.transacoes.filter((item) => item !== target.value),
      );
      global.setContasDigitais(
        global.contasDigitais.filter((item) => item !== target.value),
      );
      global.setLimitesEHorarios(
        global.limitesEHorarios.filter((item) => item !== target.value),
      );
      global.setTarifas(global.tarifas.filter((item) => item !== target.value));
      global.setTarifasPersonalizadas(
        global.tarifasPersonalizadas.filter((item) => item !== target.value),
      );
      global.setConta(global.conta.filter((item) => item !== target.value));
      global.setEntradas(
        global.entradas.filter((item) => item !== target.value),
      );
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <th scope="col">Ver listagem</th>
          <th scope="col">Ver detalhes</th>
          <th scope="col">Criar</th>
          <th scope="col">Editar</th>
          <th scope="col">Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.topic}>
          <th scope="col">Todos</th>
          <td>
            <input
              type="checkbox"
              onChange={handleChecked}
              value="Ver listagem"
              checked={
                !global.analiseDeContas.includes('Ver listagem') ||
                !global.analiseDeTransacoes.includes('Ver listagem') ||
                !global.cliente.includes('Ver listagem') ||
                !global.transacoes.includes('Ver listagem') ||
                !global.contasDigitais.includes('Ver listagem') ||
                !global.limitesEHorarios.includes('Ver listagem') ||
                !global.tarifas.includes('Ver listagem') ||
                !global.tarifasPersonalizadas.includes('Ver listagem') ||
                !global.conta.includes('Ver listagem') ||
                !global.entradas.includes('Ver listagem')
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
                !global.analiseDeTransacoes.includes('Ver detalhes') ||
                !global.cliente.includes('Ver detalhes') ||
                !global.transacoes.includes('Ver detalhes') ||
                !global.contasDigitais.includes('Ver detalhes') ||
                !global.limitesEHorarios.includes('Ver detalhes') ||
                !global.tarifas.includes('Ver detalhes') ||
                !global.tarifasPersonalizadas.includes('Ver detalhes') ||
                !global.conta.includes('Ver detalhes') ||
                !global.entradas.includes('Ver detalhes')
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
                !global.analiseDeTransacoes.includes('Criar') ||
                !global.cliente.includes('Criar') ||
                !global.transacoes.includes('Criar') ||
                !global.contasDigitais.includes('Criar') ||
                !global.limitesEHorarios.includes('Criar') ||
                !global.tarifas.includes('Criar') ||
                !global.tarifasPersonalizadas.includes('Criar') ||
                !global.conta.includes('Criar') ||
                !global.entradas.includes('Criar')
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
                !global.analiseDeTransacoes.includes('Editar') ||
                !global.cliente.includes('Editar') ||
                !global.transacoes.includes('Editar') ||
                !global.contasDigitais.includes('Editar') ||
                !global.limitesEHorarios.includes('Editar') ||
                !global.tarifas.includes('Editar') ||
                !global.tarifasPersonalizadas.includes('Editar') ||
                !global.conta.includes('Editar') ||
                !global.entradas.includes('Editar')
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
                !global.analiseDeTransacoes.includes('Deletar') ||
                !global.cliente.includes('Deletar') ||
                !global.transacoes.includes('Deletar') ||
                !global.contasDigitais.includes('Deletar') ||
                !global.limitesEHorarios.includes('Deletar') ||
                !global.tarifas.includes('Deletar') ||
                !global.tarifasPersonalizadas.includes('Deletar') ||
                !global.conta.includes('Deletar') ||
                !global.entradas.includes('Deletar')
                  ? false
                  : true
              }
            />
          </td>
        </tr>

        <Analise />

        <Contas />

        <Customizacao />

        <Financeiro />
      </tbody>
    </table>
  );
};

export default Table;
