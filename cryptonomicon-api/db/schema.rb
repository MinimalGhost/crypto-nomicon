# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180209150331) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cryptos", force: :cascade do |t|
    t.string "name"
    t.string "symbol"
    t.string "rank"
    t.string "price_usd"
    t.string "price_btc"
    t.string "daily_volume_usd"
    t.string "market_cap_usd"
    t.string "available_supply"
    t.string "total_supply"
    t.string "percent_change_1h"
    t.string "percent_change_24h"
    t.string "percent_change_7d"
    t.string "last_updated"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickers", force: :cascade do |t|
    t.integer "user_id"
    t.integer "crypto_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
