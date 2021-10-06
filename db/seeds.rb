Todo.destroy_all
PetUser.destroy_all
Puppy.destroy_all
PoopTracker.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding...🌱 "
pet_user1 = PetUser.create(photo_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*", favorite_breed: "Dalmatian", birthday: "10-24-1997", username: "AbrahamS", name: "Abraham", password: "password")
breed1 = Breed.create(name: "Dalmatian")
puppy1 = Puppy.create(pet_user_id: pet_user1.id, breed_id: breed1.id, name: "Dog-o", date_of_birth: "10-24-1997", gotcha_date: "01-01-01", size: "Big", favorite_toy: "Chew toy")

todo1 = Todo.create(puppy_id: puppy1.id, pet_user_id: pet_user1.id, content: "Take the dog out", is_completed: false)
todo2 = Todo.create(puppy_id: puppy1.id, pet_user_id: pet_user1.id, content: "Die", is_completed: false)
# :id, :time, :content, :pet_user_id, :id
date1 = DateTime.now()
tracker1 = PoopTracker.create(puppy_id: puppy1.id, pet_user_id: pet_user1.id, content: "Peed", time:date1)
puts "Done...🪴"
