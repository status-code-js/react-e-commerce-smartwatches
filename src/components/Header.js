import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons'

const fontStyles = {color: '#868D70', fontSize: '18px'}

function Header() {
  return (
    <div>
         <header>
        <div className="brand">
          <img src="./assets/icon-brand.png" alt="logo" />
          <div className="brand-text">
            <h3>Smartwatches</h3>
            <span className="brand-p">Find your perfect Smartwatch</span>
          </div>
        </div>
        <ul className="icons-list">
          <li className="icons-list__item">
          <FontAwesomeIcon icon={faCartShopping} style={fontStyles} />
          <span className="header-price">420€</span>
          </li>
          <li className="icons-list__item"><FontAwesomeIcon icon={faHeart} style={fontStyles} /></li>
          <li className="icons-list__item"><FontAwesomeIcon icon={faCircleUser} style={fontStyles}/></li>
        </ul>
      </header>
    </div>
  )
}

export default Header