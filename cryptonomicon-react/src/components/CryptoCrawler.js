import React from 'react'
import CrawlerItem from './CrawlerItem'

const CryptoCrawler = ({cryptos}) => {

  const crawlerArray = cryptos.map(c => < CrawlerItem crypto={c} key={c.id}/>)

  return (
    <footer className="main-footer">
      <div className="ticker">
        { crawlerArray }
      </div>
    </footer>

  )
}

export default CryptoCrawler
