import React from 'react'

const CrawlerItem = ({crypto}) => {
  console.log(crypto)
  let changeColor = {color: 'black'}
  if (crypto.percent_change_24h) {
    crypto.percent_change_24h[0] === "-" ? changeColor = { color: 'red' } : changeColor = { color: 'green'}
  }

  return (
    <div className="ticker__item">
      {crypto.symbol}...{crypto.price_usd}
    </div>
  )
}

export default CrawlerItem
