import React from 'react'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
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
      <div className="CryptoContainer">
        <Navigation />
        <Portfolio tickers={this.state.tickers}/>
        <CryptoDetail selectedItem={this.state.selectedItem}/>
      </div>
    )
  }
}

export default CryptoContainer
