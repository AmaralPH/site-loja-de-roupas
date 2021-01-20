import React from 'react';
import './App.css';

import Header from './components/Header';
import BarraProdutos from './components/BarraProdutos';
import Destaque from './components/Destaque';
import CatalogoRolagem from './components/CatalogoRolagem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BarraProdutos />
        <Destaque />
        <CatalogoRolagem />
      </div>
    );
  }
}

export default App;
