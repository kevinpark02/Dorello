# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all
List.delete_all
Card.delete_all
Comment.delete_all

# User seed
    u1 = User.create(email: 'kevin.park02@gmail.com', password: 'dorellotest1')
    u2 = User.create(email: 'carol.h.yang@gmail.com', password: 'dorellotest2')
    u3 = User.create(email: 'kara.kara@gmail.com', password: 'dorellotest3')

# Board seed
    # User 1
        b1 = Board.create(board_name: "December Todos", author_id: u1.id)
        b2 = Board.create(board_name: "January Finance", author_id: u1.id)
    
    # User 2
        b3 = Board.create(board_name: "Preparing Nursery", author_id: u2.id)
        b4 = Board.create(board_name: "Winter Retreat", author_id: u2.id)
    
    # User 3
        b5 = Board.create(board_name: "Welcome Night 2021", author_id: u3.id)
        b6 = Board.create(board_name: "Video Service Crew", author_id: u3.id)

# List seed
    # Board 1
        l1 = List.create(title: "Todo", board_id: b1.id, creator_id: u1.id)
        l2 = List.create(title: "Doing", board_id: b1.id, creator_id: u1.id)
        l3 = List.create(title: "Done", board_id: b1.id, creator_id: u1.id)
    
    # Board 2
        l4 = List.create(title: "Todo", board_id: b2.id, creator_id: u1.id)
        l5 = List.create(title: "Doing", board_id: b2.id, creator_id: u2.id)
        l6 = List.create(title: "Done", board_id: b2.id, creator_id: u3.id)
    
    # Board 3
        l7 = List.create(title: "Todo", board_id: b3.id, creator_id: u2.id)
        l8 = List.create(title: "Doing", board_id: b3.id, creator_id: u2.id)
        l9 = List.create(title: "Done", board_id: b3.id, creator_id: u2.id)
    
    # Board 4
        l10 = List.create(title: "Todo", board_id: b4.id, creator_id: u1.id)
        l11 = List.create(title: "Doing", board_id: b4.id, creator_id: u2.id)
        l12 = List.create(title: "Done", board_id: b4.id, creator_id: u3.id)
    
    # Board 5
        l13 = List.create(title: "Todo", board_id: b5.id, creator_id: u3.id)
        l14 = List.create(title: "Doing", board_id: b5.id, creator_id: u3.id)
        l15 = List.create(title: "Done", board_id: b5.id, creator_id: u3.id)
    
    # Board 6
        l16 = List.create(title: "Todo", board_id: b6.id, creator_id: u1.id);
        l17 = List.create(title: "Doing", board_id: b6.id, creator_id: u2.id);
        l18 = List.create(title: "Done", board_id: b6.id, creator_id: u3.id);

# Card seed
    # List 1
        c1 = Card.create(name: "Buy Toilet Papers", description: "Costco", due_date: "", list_id: l1.id, creator_id: u1.id)
        c2 = Card.create(name: "Buy Water", description: "Albertson's", due_date: "", list_id: l1.id, creator_id: u2.id)
    # List 2
        c3 = Card.create(name: "Wedding Video", description: "Finale Song", due_date: "", list_id: l2.id, creator_id: u3.id)
        c4 = Card.create(name: "Christmas Gifts", description: "Chou boys & Chang Girls", due_date: "", list_id: l2.id, creator_id: u1.id)
    # List 7
        c5 = Card.create(name: "Baby Crib", description: "For Kara", due_date: "", list_id: l7.id, creator_id: u1.id)
    
# Comment seed
    # Card 1
        co1 = Comment.create(body: "Hey, I didn't see them at Costco", card_id: c1.id, creator_id: u1.id)
        co2 = Comment.create(body: "Should we check target then?", card_id: c1.id, creator_id: u1.id)
        co3 = Comment.create(body: "Albertson's might be cheaper? I don't know I'm writing all this just to check css... I hope this wraps... but what if I write more. would this overflow?", card_id: c1.id, creator_id: u1.id)
    # Card 3
        co4 = Comment.create(body: "Can Matt work on this?", card_id: c3.id, creator_id: u2.id) 
    # Card 5
        co5 = Comment.create(body: "Is this for me?", card_id: c5.id, creator_id: u3.id)
        co6 = Comment.create(body: "Yup, it's for you. Read the description", card_id: c5.id, creator_id: u2.id)

        



