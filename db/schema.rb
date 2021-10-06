# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_06_155133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "breeds", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pet_users", force: :cascade do |t|
    t.string "photo_url"
    t.string "favorite_breed"
    t.date "birthday"
    t.string "password_digest"
    t.string "name"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "poop_trackers", force: :cascade do |t|
    t.datetime "time"
    t.bigint "puppy_id"
    t.bigint "pet_user_id"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_user_id"], name: "index_poop_trackers_on_pet_user_id"
    t.index ["puppy_id"], name: "index_poop_trackers_on_puppy_id"
  end

  create_table "puppies", force: :cascade do |t|
    t.string "name"
    t.string "date_of_birth"
    t.string "gotcha_date"
    t.string "size"
    t.string "favorite_toy"
    t.integer "breed_id"
    t.bigint "pet_user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_user_id"], name: "index_puppies_on_pet_user_id"
  end

  create_table "todos", force: :cascade do |t|
    t.string "content"
    t.boolean "is_completed"
    t.bigint "pet_user_id"
    t.bigint "puppy_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_user_id"], name: "index_todos_on_pet_user_id"
    t.index ["puppy_id"], name: "index_todos_on_puppy_id"
  end

end
