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
    u3 = User.create(email: 'matt.devo@gmail.com', password: 'dorellotest3')
    u4 = User.create(email: 'demo@dorello.com', password: 'demoonly')

# Board seed
    # User 1
        b1 = Board.create(board_name: "Winter Welcome Night", author_id: u1.id)
        b2 = Board.create(board_name: "Balcony Remodel", author_id: u1.id)
    
    # User 2
        b3 = Board.create(board_name: "New Years Ensemble", author_id: u2.id)
        b4 = Board.create(board_name: "Keyboardist Training", author_id: u2.id)
    
    # User 3
        b5 = Board.create(board_name: "Welcome Night Videos", author_id: u3.id)
        b6 = Board.create(board_name: "Trailer Maintenance", author_id: u3.id)

# List seed
    # Board 1
        l1 = List.create(title: "Publicity", board_id: b1.id, creator_id: u1.id)
        l2 = List.create(title: "Music", board_id: b1.id, creator_id: u1.id)
        l3 = List.create(title: "Give aways", board_id: b1.id, creator_id: u1.id)
    
    # Board 2
        l4 = List.create(title: "Demolition", board_id: b2.id, creator_id: u1.id)
        l5 = List.create(title: "Design", board_id: b2.id, creator_id: u2.id)
        l6 = List.create(title: "Construction", board_id: b2.id, creator_id: u3.id)
    
    # Board 3
        l7 = List.create(title: "Recruiting", board_id: b3.id, creator_id: u2.id)
        l8 = List.create(title: "Practice", board_id: b3.id, creator_id: u2.id)
        l9 = List.create(title: "Rehearsal", board_id: b3.id, creator_id: u2.id)
    
    # Board 4
        l10 = List.create(title: "Prepare Lesson Plan", board_id: b4.id, creator_id: u1.id)
        l11 = List.create(title: "Zoom Setup", board_id: b4.id, creator_id: u2.id)
        l12 = List.create(title: "List of Songs", board_id: b4.id, creator_id: u3.id)
    
    # Board 5
        l13 = List.create(title: "Storyboard", board_id: b5.id, creator_id: u3.id)
        l14 = List.create(title: "Filming", board_id: b5.id, creator_id: u3.id)
        l15 = List.create(title: "Editting", board_id: b5.id, creator_id: u3.id)
    
    # Board 6
        l16 = List.create(title: "Trailer Park", board_id: b6.id, creator_id: u1.id);
        l17 = List.create(title: "Organize inside", board_id: b6.id, creator_id: u2.id);
        l18 = List.create(title: "Repair", board_id: b6.id, creator_id: u3.id);

# Update Board
    # Board 1
        b1.update({id: b1.id, list_order: [l1.id.to_s, l2.id.to_s, l3.id.to_s]})
    # Board 2
        b2.update({id: b2.id, list_order: [l4.id.to_s, l5.id.to_s, l6.id.to_s]})
    # Board 3
        b3.update({id: b3.id, list_order: [l7.id.to_s, l8.id.to_s, l9.id.to_s]})
    # Board 4
        b4.update({id: b4.id, list_order: [l10.id.to_s, l11.id.to_s, l12.id.to_s]})
    # Board 5
        b5.update({id: b5.id, list_order: [l13.id.to_s, l14.id.to_s, l15.id.to_s]})
    # Board 6
        b6.update({id: b6.id, list_order: [l16.id.to_s, l17.id.to_s, l18.id.to_s]})
        
# Card seed
    # List 1
        c1 = Card.create(name: "Shoreline Email", description: "Send email to each class", due_date: "", list_id: l1.id, creator_id: u1.id)
        c2 = Card.create(name: "Instagram", description: "Start posting 1/2/2021", due_date: "", list_id: l1.id, creator_id: u2.id)
    # List 2
        c3 = Card.create(name: "Band members", description: "Limited to 5 instruments", due_date: "", list_id: l2.id, creator_id: u3.id)
        c4 = Card.create(name: "Recording", description: "Each person need to take turns coming into the studio", due_date: "", list_id: l2.id, creator_id: u1.id)
    # List 7
        c5 = Card.create(name: "Signup form", description: "Ask Kevin to make it and send it out", due_date: "", list_id: l7.id, creator_id: u1.id)

# Update lists
    # List 1
        l1.update({id: l1.id, board_id: b1.id, card_order: [c1.id.to_s, c2.id.to_s]})
    # List 2
        l2.update({id: l2.id, board_id: b1.id, card_order: [c3.id.to_s, c4.id.to_s]})
    # List 7
        l7.update({id: l7.id, board_id: b3.id, card_order: [c5.id.to_s]})

    
# Comment seed
    # Card 1
        co1 = Comment.create(body: "Just to clarify, are we writing one email to each class?", card_id: c1.id, creator_id: u2.id)
        co2 = Comment.create(body: "Yup! Can you actually draft the emails for me to review?", card_id: c1.id, creator_id: u1.id)
    # Card 2
        co3 = Comment.create(body: "Have we assigned this task to anyone?", card_id: c2.id, creator_id: u3.id)
    # Card 3
        co4 = Comment.create(body: "Which instruments are we using? Or do we need to pick them?", card_id: c3.id, creator_id: u1.id) 
    # Card 5
        co5 = Comment.create(body: "Hey, when is this due?", card_id: c5.id, creator_id: u1.id)
        co6 = Comment.create(body: "I vaguely remember Carol saying by 12/23... I will mark it here.", card_id: c5.id, creator_id: u3.id)

        



