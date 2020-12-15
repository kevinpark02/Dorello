json.board do
    json.set! @board.id do
        json.partial! 'board', board: @board
    end
end

json.lists do
    @board.lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :title, :board_id, :creator_id  
        end 
    end
end

json.cards do 
    @board.cards.each do |card|
        json.set! card.id do
            json.extract! card, :id, :name, :description, :due_date, :list_id, :creator_id
        end
    end
end

json.comments do 
    @board.comments.each do |comment|
        json.set! comment.id do
            # json.extract! comment, :id, :body, :card_id, :creator_id
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end