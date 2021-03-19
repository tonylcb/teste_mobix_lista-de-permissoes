import React from 'react';
import styles from '../Table.module.css';
import { GlobalContext } from '../GlobalContext';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Customizacao = () => {
  const global = React.useContext(GlobalContext);

  const [customizacao, setCustomizacao] = React.useState(false);

  function clickCustomizacao() {
    setCustomizacao((active) => !active);
  }

  function handleLimitesEHorarios({ target }) {
    if (target.checked) {
      global.setLimitesEHorarios([...global.limitesEHorarios, target.value]);
    } else {
      global.setLimitesEHorarios(
        global.limitesEHorarios.filter((item) => item !== target.value),
      );
    }
  }

  function handleTarifas({ target }) {
    if (target.checked) {
      global.setTarifas([...global.tarifas, target.value]);
    } else {
      global.setTarifas(global.tarifas.filter((item) => item !== target.value));
    }
  }

  function handleTarifasPersonalizadas({ target }) {
    if (target.checked) {
      global.setTarifasPersonalizadas([
        ...global.tarifasPersonalizadas,
        target.value,
      ]);
    } else {
      global.setTarifasPersonalizadas(
        global.tarifasPersonalizadas.filter((item) => item !== target.value),
      );
    }
  }

  function handleConta({ target }) {
    if (target.checked) {
      global.setConta([...global.conta, target.value]);
    } else {
      global.setConta(global.conta.filter((item) => item !== target.value));
    }
  }

  function handleChecked({ target }) {
    if (target.checked) {
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
    } else {
      global.setLimitesEHorarios(
        global.limitesEHorarios.filter((item) => item !== target.value),
      );
      global.setTarifas(global.tarifas.filter((item) => item !== target.value));
      global.setTarifasPersonalizadas(
        global.tarifasPersonalizadas.filter((item) => item !== target.value),
      );
      global.setConta(global.conta.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      <tr className={styles.topic}>
        <th scope="col" onClick={clickCustomizacao}>
          Customização{' '}
          {customizacao ? (
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
            checked={
              !global.limitesEHorarios.includes('Ver listagem') ||
              !global.tarifas.includes('Ver listagem') ||
              !global.tarifasPersonalizadas.includes('Ver listagem') ||
              !global.conta.includes('Ver listagem')
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
              !global.limitesEHorarios.includes('Ver detalhes') ||
              !global.tarifas.includes('Ver detalhes') ||
              !global.tarifasPersonalizadas.includes('Ver detalhes') ||
              !global.conta.includes('Ver detalhes')
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
              !global.limitesEHorarios.includes('Criar') ||
              !global.tarifas.includes('Criar') ||
              !global.tarifasPersonalizadas.includes('Criar') ||
              !global.conta.includes('Criar')
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
              !global.limitesEHorarios.includes('Editar') ||
              !global.tarifas.includes('Editar') ||
              !global.tarifasPersonalizadas.includes('Editar') ||
              !global.conta.includes('Editar')
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
              !global.limitesEHorarios.includes('Deletar') ||
              !global.tarifas.includes('Deletar') ||
              !global.tarifasPersonalizadas.includes('Deletar') ||
              !global.conta.includes('Deletar')
                ? false
                : true
            }
          />
        </td>
      </tr>

      {customizacao ? (
        <>
          <tr className={styles.subtopic}>
            <th scope="col">Limites e horários</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleLimitesEHorarios}
                checked={global.limitesEHorarios.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleLimitesEHorarios}
                checked={global.limitesEHorarios.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleLimitesEHorarios}
                checked={global.limitesEHorarios.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleLimitesEHorarios}
                checked={global.limitesEHorarios.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleLimitesEHorarios}
                checked={global.limitesEHorarios.includes('Deletar')}
              />
            </td>
          </tr>

          <tr className={styles.subtopic}>
            <th scope="col">Tarifas</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleTarifas}
                checked={global.tarifas.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleTarifas}
                checked={global.tarifas.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleTarifas}
                checked={global.tarifas.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleTarifas}
                checked={global.tarifas.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleTarifas}
                checked={global.tarifas.includes('Deletar')}
              />
            </td>
          </tr>

          <tr className={styles.subtopic}>
            <th scope="col">Tarifas personalizadas</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleTarifasPersonalizadas}
                checked={global.tarifasPersonalizadas.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleTarifasPersonalizadas}
                checked={global.tarifasPersonalizadas.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleTarifasPersonalizadas}
                checked={global.tarifasPersonalizadas.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleTarifasPersonalizadas}
                checked={global.tarifasPersonalizadas.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleTarifasPersonalizadas}
                checked={global.tarifasPersonalizadas.includes('Deletar')}
              />
            </td>
          </tr>

          <tr className={styles.subtopic}>
            <th scope="col">Conta</th>
            <td>
              <input
                type="checkbox"
                value="Ver listagem"
                onChange={handleConta}
                checked={global.conta.includes('Ver listagem')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Ver detalhes"
                onChange={handleConta}
                checked={global.conta.includes('Ver detalhes')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Criar"
                onChange={handleConta}
                checked={global.conta.includes('Criar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Editar"
                onChange={handleConta}
                checked={global.conta.includes('Editar')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="Deletar"
                onChange={handleConta}
                checked={global.conta.includes('Deletar')}
              />
            </td>
          </tr>
        </>
      ) : null}
    </>
  );
};

export default Customizacao;
