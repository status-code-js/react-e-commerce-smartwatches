import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <div>
        <div className="search__section">
        <div className="search__wrapper">
          <h1>Apple Smartwatches</h1>
          <div className="search__block">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#868D70', fontSize:'14px'}} />
            <input placeholder={'Search...'}></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search