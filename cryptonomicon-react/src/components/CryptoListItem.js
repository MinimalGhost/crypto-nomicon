import React from 'react'

const CryptoListItem = ({ticker}) => {

  let changeColor = {color: 'black'}
  if (ticker.percent_change_24h) {
    ticker.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <li>
      <h3>{ticker.symbol}</h3>
      <small>
        <span>{ticker.name}</span>
        <span style={changeColor}>{ticker.price_usd}</span>
      </small>
    </li>
  )
}

export default CryptoListItem
