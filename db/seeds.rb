# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all

# User seed
    u1 = User.create(email: 'kevin.park02@gmail.com', password: 'dorellotest1')
    u2 = User.create(email: 'carol.h.yang@gmail.com', password: 'dorellotest2')
    u3 = User.create(email: 'kara.kara@gmail.com', password: 'dorellotest3')

# Board seed
    # User 1
        b1 = Board.create(board_name: "December Todos", author_id: u1.id);
        b2 = Board.create(board_name: "January Finance", author_id: u1.id);
    
    # User 2
        b3 = Board.create(board_name: "Preparing Nursery", author_id: u2.id);
        b4 = Board.create(board_name: "Winter Retreat", author_id: u2.id)
    
    # User 3
        b5 = Board.create(board_name: "Welcome Night 2021", author_id: u3.id)
        b6 = Board.create(board_name: "Video Service Crew", author_id: u3.id)

#List seed
    # Board 1
        l1 = List.create(title: "Todo", board_id: b1.id, creator_id: u1.id);
        l2 = List.create(title: "Doing", board_id: b1.id, creator_id: u1.id);
        l3 = List.create(title: "Done", board_id: b1.id, creator_id: u1.id);
    
    # Board 2
        l4 = List.create(title: "Todo", board_id: b2.id, creator_id: u1.id);
        l5 = List.create(title: "Doing", board_id: b2.id, creator_id: u2.id);
        l6 = List.create(title: "Done", board_id: b2.id, creator_id: u3.id);
    
    # Board 3
        l7 = List.create(title: "Todo", board_id: b3.id, creator_id: u2.id);
        l8 = List.create(title: "Doing", board_id: b3.id, creator_id: u2.id);
        l9 = List.create(title: "Done", board_id: b3.id, creator_id: u2.id);
    
    # Board 4
        l10 = List.create(title: "Todo", board_id: b4.id, creator_id: u1.id);
        l11 = List.create(title: "Doing", board_id: b4.id, creator_id: u2.id);
        l12 = List.create(title: "Done", board_id: b4.id, creator_id: u3.id);
    
    # Board 5
        l7 = List.create(title: "Todo", board_id: b5.id, creator_id: u3.id);
        l8 = List.create(title: "Doing", board_id: b5.id, creator_id: u3.id);
        l9 = List.create(title: "Done", board_id: b5.id, creator_id: u3.id);
    
    # Board 6
        l10 = List.create(title: "Todo", board_id: b6.id, creator_id: u1.id);
        l11 = List.create(title: "Doing", board_id: b6.id, creator_id: u2.id);
        l12 = List.create(title: "Done", board_id: b6.id, creator_id: u3.id);


