import React from 'react';

const CryptoListItem = ({ ticker, priceColor, handleSelectItem }) => {
  //dynamically render priceColor
  return (
    <li>
      <h3 onClick={() => handleSelectItem(ticker)}>
        <p className="split-para">{ticker.symbol}
          <span style={priceColor(ticker)}>{ticker.price_usd}</span>
        </p>
      </h3>
    </li>
  );
};

export default CryptoListItem;
