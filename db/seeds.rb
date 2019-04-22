# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'song'
require 'playlist'

s1 = Song.create(name: 'I like chicken', album: 'Chicken Tales', genre: 'Chicken Music', url: "https://www.w3schools.com/tags/horse.ogg")
s2 = Song.create(name: 'I like beef', album: 'Beef Tales', genre: 'Beef Music', url: "https://www.w3schools.com/tags/horse.ogg")
s3 = Song.create(name: 'Meeting People', album: 'Sup My Dude', genre: 'Talking-Bout-Stuff', url: "https://www.w3schools.com/tags/horse.ogg")
s4 = Song.create(name: 'Sequential Learning', album: 'Maths', genre: 'Math Tunes', url: "https://www.w3schools.com/tags/horse.ogg")
s5 = Song.create(name: 'Code is Lame!', album: 'Emo 2020', genre: 'Coding Sucks!', url: "https://www.w3schools.com/tags/horse.ogg")



p1 = Playlist.create(name: "Luca's chill mix")
p2 = Playlist.create(name: "Luca's not chill mix")
p1.songs << s1
p1.songs << s2
p2.songs << s3
p2.songs << s4
p2.songs << s5




