import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import styles from './App.css';
import { GlobalStorage } from './Components/GlobalContext';
import Button from './Components/Button';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <GlobalStorage>
        <Table />
        <Button />
      </GlobalStorage>
    </div>
  );
}

export default App;
