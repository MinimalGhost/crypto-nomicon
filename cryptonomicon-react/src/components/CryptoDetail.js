import React from 'react';
import './CryptoDetail.css';

const CryptoDetail = ({tickers, ticker, priceColor, handleDeleteTicker, handleAddTicker}) => {
  //dynamically render either an add or remove button
  //dynamically assign color of ticker price
  return (
    <article className="content">
      <div className="content-detail">
        { tickers.find(t => t.id === ticker.id) ?
          <button onClick={() => handleDeleteTicker(ticker.id)}>Remove</button> :
          <button onClick={() => handleAddTicker(ticker.id)}>Add</button> }
        <h2>{ticker.name}</h2>
        <h4>{`(${ticker.symbol}) Supply: ${ticker.total_supply}`}</h4>
        <h2 style={priceColor(ticker)}>{ticker.price_usd} {`(${ticker.percent_change_24h}%)`}</h2>
      </div>
    </article>
  );
};

export default CryptoDetail;
