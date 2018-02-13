import React from 'react'
import CryptoList from './CryptoList'
import CryptoDetail from './CryptoDetail'
import adapter from '../adapter'

class CryptoContainer extends React.Component {
  state = {
    searchTerm: "",
    tickers: [],
    cryptos: [],
    selectedItem: {}
  }

  fetchCryptos = () => {
    adapter.cryptos.getCryptos()
    .then(cryptos_data => this.setState({
      cryptos: cryptos_data,
      selectedItem: cryptos_data[0]
    }))
  }

  fetchTickers = () => {
    adapter.tickers.getTickers()
    .then(tickers_data => this.setState({
      tickers: tickers_data,
      selectedItem: tickers_data[0]
    }))
  }

  handleSelectItem = (ticker) => {
    this.setState({
      selectedItem: ticker
    })
  }

  handleAddTicker = (id) => {
    adapter.tickers.addTicker(id)
    .then(tickers_data => this.setState({
      tickers: tickers_data,
      selectedItem: tickers_data[0]
    }))
  }

  handleDeleteTicker = (id) => {
    adapter.tickers.deleteTicker(id)
    .then(tickers_data => this.setState({
      tickers: tickers_data,
      selectedItem: tickers_data[0]
    }))
  }

  componentDidMount() {
    this.fetchTickers()
  }

  render() {
    return (
      <div className="wrapper">
        { this.state.tickers.length > 0 &&
        <CryptoList tickers={this.state.tickers} handleSelectItem={this.handleSelectItem}/> }
        { this.state.tickers.length > 0 &&
        <CryptoDetail tickers={this.state.tickers} ticker={this.state.selectedItem} handleAddTicker={this.handleAddTicker} handleDeleteTicker={this.handleDeleteTicker} />
        }
      </div>
    )
  }
}

export default CryptoContainer
