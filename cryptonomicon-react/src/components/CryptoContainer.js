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

  //initiate fetches for cryptos and user's portfolio of tickers
  componentDidMount() {
    this.fetchTickers();
    console.log("fetchTickers fired");
    this.fetchCryptos("tickers");
    console.log("fetchCryptosForCrawler fired");
  };

  //get cryptos and toggle crypto list component however you like
  fetchCryptos = (list="cryptos") => {
    adapter.cryptos.getCryptos()
    .then(cryptos_data => this.setState({
      cryptos: cryptos_data,
      selectedItem: cryptos_data[0],
      toggle: list
    }));
  };

  //get user's tickers and toggle list component to display tickers
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

  //dynamically assign price color to ticker
  setPriceColor = (ticker) => {
    let priceColor = {color: 'black'};
    //if ticker has a pc24, dynamically assign red to negative
    if (ticker.percent_change_24h) {
      ticker.percent_change_24h[0] === "-" ? priceColor = { color: 'red' } : priceColor = { color: 'green'};
    };
    return priceColor;
  };

  render() {
    return (
      <div className="wrapper">
      <CryptoCrawler cryptos={this.state.cryptos} />
        { this.state.tickers.length > 0 &&
        <CryptoList tickers={this.state.tickers} cryptos={this.state.cryptos} toggle={this.state.toggle} priceColor={this.setPriceColor} handleSelectItem={this.handleSelectItem} fetchTickers={this.fetchTickers} fetchCryptos={this.fetchCryptos}/> }
        { this.state.tickers.length > 0 &&
        <CryptoDetail tickers={this.state.tickers} ticker={this.state.selectedItem}
          priceColor={this.setPriceColor} handleAddTicker={this.handleAddTicker} handleDeleteTicker={this.handleDeleteTicker} />
        }
      </div>
    );
  };
};

export default CryptoContainer;
