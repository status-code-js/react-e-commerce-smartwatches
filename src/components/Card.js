import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const fontStyles = {color: '#868D70', fontSize: '18px'}

function Card() {
  return (
    <div>
         <div className="card-wrapper">
      <div className="card">
       <div className="favorite">
        <img className="favorite-icon" src="./assets/heart.svg" alt="heart-unlike" />
       </div>
        <img className="img-card" src="./assets/1.jpeg" alt="watch-1" style={{ width: '150px', height: '112px'}}/>
        <p>APPLE Watch Series 8 GPS+Cellular 45mm Grafito Loop</p>
        <div className="price-wrapper">
          <div className="price">
            <span>Price:</span>
            <b>914,99€</b>
          </div>
          <button>
          <FontAwesomeIcon className="plus-icon" icon={faPlus} style={fontStyles} />
          </button>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Card