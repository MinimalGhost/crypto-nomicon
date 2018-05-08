import React from 'react';

const CryptoCrawler = ({cryptos}) => {

  const crawlerArray = cryptos.map(c => `  ${c.symbol} ${c.price_usd}//`);

  return (
    <nav className="marquee">
      <span>{crawlerArray}</span>
    </nav>
  );
};

export default CryptoCrawler;
