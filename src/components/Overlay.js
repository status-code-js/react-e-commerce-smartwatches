import React from 'react'


function Overlay({ onCloseCart, items = []} ) {

  return (
    <div>
        <div className="overlay">
        <div className="side__block">
          <div className="side__block-title">
          <h2>Your Cart</h2>
            <img onClick={onCloseCart} className="cross__icon" src="./assets/cross__icon.svg" alt="cross-icon" />
          </div>
          <div className="items">
            {items.map((obj) => (
              <div className="cart__item">
              <img src={obj.image} alt="watch-1" />
              <div className="cart__text">
                <p>{obj.name}</p>
                <b>{obj.price}€</b>
             </div>
             <img className="cross__icon" src="./assets/cross__icon.svg" alt="cross-icon" />
            </div> 
              )
            )}           
          </div>
          <div> 
          <ul className="list">
            <li className="list__item">
              <span>Total:</span>
              <div className="separator"></div>
              <b>599,99€</b>
            </li>
            <li className="list__item">
              <span>Tax:</span>
              <div className="separator"></div>
              <b>25€</b>
            </li>
          </ul>
          <div className="btn__wrapper">
          <button className="btn__buy">Buy</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay