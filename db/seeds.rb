# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create(email: 'kevin.park02@gmail.com', password: 'dorellotest1')
u2 = User.create(email: 'carol.h.yang@gmail.com', password: 'dorellotest2')
u3 = User.create(email: 'kara.kara@gmail.com', password: 'dorellotest3')