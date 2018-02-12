import React from 'react';

const CryptoDetail = ({ticker}) => {

  let changeColor = {color: 'black'}
  if (ticker.percent_change_24h) {
    ticker.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <article className="content">
      <h4>{ticker.name}</h4>
      <small>{`(${ticker.symbol}) Supply: ${ticker.total_supply}`}</small>
      <h2 style={changeColor}>{ticker.price_usd} {`(${ticker.percent_change_24h}%)`}</h2>
    </article>
  )
}

export default CryptoDetail
