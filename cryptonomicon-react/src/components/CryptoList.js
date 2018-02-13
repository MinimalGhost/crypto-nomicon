import React from 'react';
import CryptoListItem from './CryptoListItem'

const CryptoList = ({tickers, handleSelectItem, fetchTickers, fetchCryptos }) => {

  const tickersArray = tickers.map((t) => (< CryptoListItem ticker={t} handleSelectItem={handleSelectItem} key={t.id}/>))

  return (
    <aside className="side">
      <button onClick={fetchTickers}>My Cryptos</button>
      <button onClick={fetchCryptos}>All Cryptos</button>
      <ul>
        {tickersArray}
      </ul>
    </aside>
  )
}

export default CryptoList
