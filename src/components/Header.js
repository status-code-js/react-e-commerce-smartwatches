import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons'

const fontStyles = {color: '#868D70', fontSize: '18px'}

function Header(props) {
  return (
    <div>
         <header>
        <div className="brand">
          <img src="./assets/icon-brand.png" alt="logo" />
          <div className="brand__text">
            <h3>Smartwatches</h3>
            <span className="brand__p">Find your perfect Smartwatch</span>
          </div>
        </div>
        <ul className="icons__list">
          <li onClick={props.onClickCart} className="icons__list-item" style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faCartShopping} style={fontStyles} />
          <span className="header__price">420€</span>
          </li>
          <li className="icons__list-item"><FontAwesomeIcon icon={faHeart} style={fontStyles} /></li>
          <li className="icons__list-item"><FontAwesomeIcon icon={faCircleUser} style={fontStyles}/></li>
        </ul>
      </header>
    </div>
  )
}

export default Header