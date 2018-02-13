import React from 'react'

const CryptoListItem = ({ticker}) => {

  let changeColor = {color: 'black'}
  if (ticker.percent_change_24h) {
    ticker.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <li>
      <h3>  
        <p className="split-para">{ticker.symbol}
          <span style={changeColor}>{ticker.price_usd}</span>
        </p>
      </h3>
    </li>
  )
}

export default CryptoListItem
