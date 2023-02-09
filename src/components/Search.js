import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <div>
        <div className="search-section">
        <div className="search-wrapper">
          <h1>Apple Smartwatches</h1>
          <div className="search-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#868D70', fontSize:'14px'}} />
            <input placeholder={'Search...'}></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search