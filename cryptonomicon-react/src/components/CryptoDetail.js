import React from 'react';

const CryptoDetail = ({tickers, ticker, handleDeleteTicker, handleAddTicker}) => {

  let changeColor = {color: 'black'}
  if (ticker.percent_change_24h) {
    ticker.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <article className="content">
      <div className="content-detail">
        { tickers.find(t => t.id === ticker.id) ?
          <button onClick={() => handleDeleteTicker(ticker.id)}>Remove</button> :
          <button onClick={() => handleAddTicker(ticker.id)}>Add</button> }
        <h2>{ticker.name}</h2>
        <h4>{`(${ticker.symbol}) Supply: ${ticker.total_supply}`}</h4>
        <h2 style={changeColor}>{ticker.price_usd} {`(${ticker.percent_change_24h}%)`}</h2>
      </div>
    </article>
  )
}

export default CryptoDetail
