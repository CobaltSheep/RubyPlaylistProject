# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'song'
require 'artist'

Artist.create(name: 'Chicken Man', origin: 'Denmark') 
Artist.create(name: 'Beef Man', origin: 'Swaziland') 

Song.create(name: 'I like chicken', artist_id: 1, album: 'Chicken Tales', genre: 'Chicken Music')
Song.create(name: 'I like beef', artist_id: 2, album: 'Beef Tales', genre: 'Beef Music')




