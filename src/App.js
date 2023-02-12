import React from 'react'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Overlay from './components/Overlay'
import Search from './components/Search';



function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
      fetch('https://63e8e7084f3c6aa6e7c4c400.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    console.log(cartItems)

  return (
    <div className="wrapper">
      {cartOpened ? <Overlay items={cartItems} onCloseCart={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="fold"></div>
        <Search />
        <div className="card__wrapper">
        {items.map((item) => (
          <Card
            name={item.name}
            price={item.price}
            image={item.image}
            onFavorite={() => console.log('It was added do favorites')}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
        </div>
      </div>
  );
}

export default App;


