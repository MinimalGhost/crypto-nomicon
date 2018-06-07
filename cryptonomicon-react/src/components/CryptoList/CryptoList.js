import React from 'react';
import './CryptoList.css';
import CryptoListItem from '../CryptoListItem/CryptoListItem';

const CryptoList = ({tickers, cryptos, toggle, priceColor, handleSelectItem, fetchTickers, fetchCryptos }) => {

  const tickersArray = tickers.map((t) => (<CryptoListItem ticker={t} priceColor={priceColor} handleSelectItem={handleSelectItem} key={t.id}/>));
  const cryptosArray = cryptos.map((c) => (<CryptoListItem ticker={c} priceColor={priceColor} handleSelectItem={handleSelectItem} key={c.id}/>));

  //conditionally render either tickersArray or cryptosArray based on toggle
  return (
    <aside className="side">
      <button id="dosomething" onClick={fetchTickers}>My Cryptos</button>
      <button onClick={()=>fetchCryptos("cryptos")}>All Cryptos</button>
      <ul>
        { toggle === 'cryptos' ? cryptosArray : tickersArray }
      </ul>
    </aside>
  );
};

export default CryptoList;
