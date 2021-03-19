import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [analiseDeContas, setAnaliseDeContas] = React.useState([]);
  const [analiseDeTransacoes, setAnaliseDeTransacoes] = React.useState([]);
  const [cliente, setCliente] = React.useState([]);
  const [transacoes, setTransacoes] = React.useState([]);
  const [contasDigitais, setContasDigitais] = React.useState([]);
  const [limitesEHorarios, setLimitesEHorarios] = React.useState([]);
  const [tarifas, setTarifas] = React.useState([]);
  const [tarifasPersonalizadas, setTarifasPersonalizadas] = React.useState([]);
  const [conta, setConta] = React.useState([]);
  const [entradas, setEntradas] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{
        analiseDeContas,
        setAnaliseDeContas,
        analiseDeTransacoes,
        setAnaliseDeTransacoes,
        cliente,
        setCliente,
        transacoes,
        setTransacoes,
        contasDigitais,
        setContasDigitais,
        limitesEHorarios,
        setLimitesEHorarios,
        tarifas,
        setTarifas,
        tarifasPersonalizadas,
        setTarifasPersonalizadas,
        conta,
        setConta,
        entradas,
        setEntradas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
