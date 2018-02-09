class CreateCryptos < ActiveRecord::Migration[5.1]
  def change
    create_table :cryptos do |t|
      t.string :name
      t.string :symbol
      t.string :rank
      t.string :price_usd
      t.string :price_btc
      t.string :daily_volume_usd
      t.string :market_cap_usd
      t.string :available_supply
      t.string :total_supply
      t.string :percent_change_1h
      t.string :percent_change_24h
      t.string :percent_change_7d
      t.string :last_updated

      t.timestamps
    end
  end
end
