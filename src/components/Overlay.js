import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const fontStyles = {color: '#868D70', fontSize: '18px'}

function Overlay() {
  return (
    <div>
        <div className="overlay">
        <div className="side-block">
          <div className="side-block__title">
          <h2>Your Cart</h2>
          <button>
            <FontAwesomeIcon className="cross-icon" icon={faXmark} style={fontStyles} />
          </button>
          </div>
          
          <div className="items">
           <div className="cart-item">
            <img src="./assets/1.jpeg" alt="watch-1" />
            <div className="cart-text">
              <p>APPLE Watch Series 8 GPS+Cellular 45mm Grafito Loop</p>
              <b>914,99€</b>
           </div>
           <button>
           <FontAwesomeIcon className="cross-icon" icon={faXmark} style={fontStyles} />
          </button>
          </div>
            <div className="cart-item">
            <img src="./assets/1.jpeg" alt="watch-1" />
            <div className="cart-text">
              <p>APPLE Watch Series 8 GPS+Cellular 45mm Grafito Loop</p>
              <b>914,99€</b>
           </div>
           <button>
           <FontAwesomeIcon className="cross-icon" icon={faXmark} style={fontStyles} />
          </button>
            </div>
          </div>
          <div> 
          <ul className="list">
            <li className="list-item">
              <span>Total:</span>
              <div className="separator"></div>
              <b>599,99€</b>
            </li>
            <li className="list-item">
              <span>Tax:</span>
              <div className="separator"></div>
              <b>25€</b>
            </li>
          </ul>
          <div className="btn-wrapper">
          <button className="btn-buy">Buy</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay