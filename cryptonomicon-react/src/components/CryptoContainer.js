import React from 'react'
import CryptoList from './CryptoList'
import CryptoDetail from './CryptoDetail'
import adapter from '../adapter'

class CryptoContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchCryptos = () => {
    adapter.cryptos.getCryptos()
    .then(cryptos_data => this.setState({
      cryptos: cryptos_data,
      selectedItem: cryptos_data[0]
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

  // componentDidMount() {
  //   let t = localStorage.getItem("token")
  //   console.log(t)
  //   if (t) {
  //     this.fetchTickers()
  //   }
  // }

  render() {
    return (
      <div className="wrapper">
        { this.props.tickers.length > 0 &&
        <CryptoList tickers={this.props.tickers} handleSelectItem={this.handleSelectItem}/> }
        { this.props.tickers.length > 0 &&
        <CryptoDetail tickers={this.props.tickers} ticker={this.props.selectedItem} handleAddTicker={this.handleAddTicker} handleDeleteTicker={this.handleDeleteTicker} />
        }
      </div>
    )
  }
}

export default CryptoContainer
