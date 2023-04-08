import React from 'react'
import { useState } from 'react'


function Card({ image, name, price, onFavorite, onPlus }) {

  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({image, name, price})
    setIsAdded(!isAdded)
  }

 
  return (
    <div>
      <div className="card">
       <div className="favorite">
       <img className="favorite__icon" src="./assets/heart.svg" alt="heart-unlike" onClick={onFavorite}/>
       </div>
        <img className="img__card" src={image} alt="watch-1" style={{ width: '150px', height: '112px'}}/>
        <p>{name}</p>
        <div className="price__wrapper">
          <div className="price">
            <span>Price:</span>
            <b>{price} €</b>
          </div>
          <img 
          className="plus__icon"
          src={isAdded ? "./assets/favorite-checked.svg" : "./assets/plus__icon.svg"} alt="plus-icon" onClick={onClickPlus}
          />
        </div>
      </div>
    </div>
    

  )
}

export default Card