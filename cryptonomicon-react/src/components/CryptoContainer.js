import React from 'react'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import CryptoDetail from './CryptoDetail'

const API = 'http://localhost:3001/api/v1/cryptocompare'

class CryptoContainer extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <Navigation />
        <Portfolio />
        <CryptoDetail />
      </div>
    )
  }
}

export default CryptoContainer
