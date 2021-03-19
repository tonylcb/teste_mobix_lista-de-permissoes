import React from 'react';
import styles from './Button.module.css';
import { GlobalContext } from './GlobalContext';

const Button = () => {
  const global = React.useContext(GlobalContext);
  const [list, setList] = React.useState([]);

  const tableList = [
    {
      analise: {
        AnaliseDeContas: [...global.analiseDeContas],
        analiseDeTransacoes: [...global.analiseDeTransacoes],
      },
      contas: {
        cliente: [...global.cliente],
        transacoes: [...global.transacoes],
        contasDigitais: [...global.contasDigitais],
      },
      customizacao: {
        limitesEHorarios: [...global.limitesEHorarios],
        tarifas: [...global.tarifas],
        tarifasPersonalizadas: [...global.tarifasPersonalizadas],
        conta: [...global.conta],
      },
      financeiro: {
        entradas: [...global.entradas],
      },
    },
  ];

  function handleClick() {
    setList(console.log(tableList));
    return list;
  }

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={styles.buttonCadastro}
    >
      CADASTRAR
    </button>
  );
};

export default Button;
