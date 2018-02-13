import React from 'react';
import CryptoListItem from './CryptoListItem'

const CryptoList = ({tickers, handleSelectItem }) => {

  const tickersArray = tickers.map((t) => (< CryptoListItem ticker={t} handleSelectItem={handleSelectItem} key={t.id}/>))

  return (
    <aside className="side">
      <ul>
        {tickersArray}
      </ul>
    </aside>
  )
}

export default CryptoList
