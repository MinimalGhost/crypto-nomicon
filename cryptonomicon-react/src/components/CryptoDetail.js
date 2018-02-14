import React from 'react';

const CryptoDetail = ({tickers, ticker, handleDeleteTicker, handleAddTicker}) => {

  let changeColor = {color: 'black'}
  if (ticker.percent_change_24h) {
    ticker.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <article className="content">
      { tickers.find(t => t.id === ticker.id) ?
        <button onClick={() => handleDeleteTicker(ticker.id)}>X</button> :
        <button onClick={() => handleAddTicker(ticker.id)}>+</button> }
      <h4>{ticker.name}</h4>
      <small>{`(${ticker.symbol}) Supply: ${ticker.total_supply}`}</small>
      <h2 style={changeColor}>{ticker.price_usd} {`(${ticker.percent_change_24h}%)`}</h2>
    </article>
  )
}

export default CryptoDetail
