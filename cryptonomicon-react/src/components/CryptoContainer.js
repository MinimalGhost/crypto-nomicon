import React from 'react'
import Navigation from './Navigation'
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
        <Navigation />
        <CryptoList />
        <CryptoDetail />
      </div>
    )
  }
}

export default CryptoContainer
