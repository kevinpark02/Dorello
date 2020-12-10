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