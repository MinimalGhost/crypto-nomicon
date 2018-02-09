class CreateTickers < ActiveRecord::Migration[5.1]
  def change
    create_table :tickers do |t|
      t.integer :user_id
      t.integer :crypto_id

      t.timestamps
    end
  end
end
