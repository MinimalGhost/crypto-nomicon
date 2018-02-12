import React from 'react'
import CryptoList from './CryptoList'
import CryptoDetail from './CryptoDetail'

const API = 'http://localhost:3001/api/v1/cryptocompare'

class CryptoContainer extends React.Component {
  state = {
    searchTerm: "",
    tickers: [],
    cryptos: [],
    selectedItem: []
  }

  render() {
    return (
      <div className="wrapper">
        <CryptoList />
        <CryptoDetail />
      </div>
    )
  }
}

export default CryptoContainer
