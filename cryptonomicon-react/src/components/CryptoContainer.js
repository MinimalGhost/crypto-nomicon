import React from 'react'
import Navbar from './Navbar'
import CryptoList from './CryptoList'
import CryptoDetail from './CryptoDetail'
import api from '../adapter'

class CryptoContainer extends React.Component {
  state = {
    searchTerm: "",
    tickers: [],
    cryptos: [],
    selectedItem: {}
  }

  fetchCryptos = () => {
    api.cryptos.getCryptos()
    .then(cryptos_data => this.setState({
      cryptos: cryptos_data,
      selectedItem: cryptos_data[0]
    }))
  }

  componentDidMount() {
    this.fetchCryptos()
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <CryptoList tickers={this.state.cryptos}/>
        <CryptoDetail ticker={this.state.selectedItem}/>
      </div>
    )
  }
}

export default CryptoContainer
