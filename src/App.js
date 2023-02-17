import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Overlay from './components/Overlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
}

    useEffect(() => {
    axios.get('https://63e8e7084f3c6aa6e7c4c400.mockapi.io/items')
    .then((res) => {
      setItems(res.data)
    })
    axios.get('https://63e8e7084f3c6aa6e7c4c400.mockapi.io/cart')
    .then((res) => {
      setCartItems(res.data)
    })
  }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63e8e7084f3c6aa6e7c4c400.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])  
      }
        
    

  return (
    <div className="wrapper">
      {cartOpened ? <Overlay items={cartItems} onCloseCart={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="fold"></div>
      <div>
        <div className="search__section">
        <div className="search__wrapper">
          <h1>{searchValue ? `Results of search: "${searchValue}"` : 'All Smartwatches'}</h1>
          <div className="search__block">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#868D70', fontSize:'14px'}} />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder={'Search...'}></input>
          </div>
        </div>
      </div>
    </div>
        <div className="card__wrapper">
        {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, id) => (
          <Card
            key={id}
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


