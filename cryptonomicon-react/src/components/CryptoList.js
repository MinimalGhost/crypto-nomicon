import React from 'react';
import CryptoListItem from './CryptoListItem'

const CryptoList = ({tickers, cryptos, toggle, handleSelectItem, fetchTickers, fetchCryptos }) => {

  const tickersArray = tickers.map((t) => (<CryptoListItem ticker={t} handleSelectItem={handleSelectItem} key={t.id}/>))
  const cryptosArray = cryptos.map((c) => (<CryptoListItem ticker={c} handleSelectItem={handleSelectItem} key={c.id}/>))

  return (
    <aside className="side">
      <button onClick={fetchTickers}>My Cryptos</button>
      <button onClick={fetchCryptos}>All Cryptos</button>
      <ul>
        { toggle === 'cryptos' ? cryptosArray : tickersArray }
      </ul>
    </aside>
  )
}

export default CryptoList
