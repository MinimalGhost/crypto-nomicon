import React from 'react';
import CryptoList from './CryptoList';
import CryptoDetail from './CryptoDetail';
import CryptoCrawler from './CryptoCrawler';
import adapter from '../adapter';

class CryptoContainer extends React.Component {
  state = {
    searchTerm: "",
    tickers: [],
    cryptos: [],
    selectedItem: {},
    toggle: "tickers"
  };

  componentDidMount() {
    this.fetchTickers();
    console.log("fetchTickers fired");
    this.fetchCryptos("tickers");
    console.log("fetchCryptosForCrawler fired");
  };

  fetchCryptos = (list="cryptos") => {
    adapter.cryptos.getCryptos()
    .then(cryptos_data => this.setState({
      cryptos: cryptos_data,
      selectedItem: cryptos_data[0],
      toggle: list
    }));
  };

  fetchTickers = () => {
    adapter.tickers.getTickers()
    .then(tickers_data => this.setState({
      tickers: tickers_data,
      selectedItem: tickers_data[0],
      toggle: "tickers"
    }));
  };

  handleSelectItem = (ticker) => {
    this.setState({
      selectedItem: ticker
    });
  };

  handleAddTicker = (id) => {
    adapter.tickers.addTicker(id)
    .then(tickers_data => this.setState({
      tickers: tickers_data
    }));
  };

  handleDeleteTicker = (id) => {
    adapter.tickers.deleteTicker(id)
    .then(tickers_data => this.setState({
      tickers: tickers_data
    }));
  };

  render() {
    return (
      <div className="wrapper">
      <CryptoCrawler cryptos={this.state.cryptos} />
        { this.state.tickers.length > 0 &&
        <CryptoList tickers={this.state.tickers} cryptos={this.state.cryptos} toggle={this.state.toggle} handleSelectItem={this.handleSelectItem} fetchTickers={this.fetchTickers} fetchCryptos={this.fetchCryptos}/> }
        { this.state.tickers.length > 0 &&
        <CryptoDetail tickers={this.state.tickers} ticker={this.state.selectedItem} handleAddTicker={this.handleAddTicker} handleDeleteTicker={this.handleDeleteTicker} />
        }
      </div>
    );
  };
};

export default CryptoContainer;
