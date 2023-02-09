import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Overlay from './components/Overlay'
import Search from './components/Search';


function App() {
  return (
    <div className="wrapper">
      <Overlay />
      <Header />
      <div className="fold"></div>
        <Search />
        <Card />
      </div>
  );
}

export default App;


