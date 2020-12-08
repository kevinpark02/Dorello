class Api::BoardsController < ApplicationController
    
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]
    
    def index #this works
        @boards = Board.all
        render :index
    end

    def show #this works
        @board = Board.find_by(id: params[:id])
    end

    def create #this works
        @board = Board.new(board_params)

        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update

        debugger

        @board = current_user.boards.find_by(id: params[:id])

        if @board && @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy #this works
        @board = current_user.boards.find_by(id: params[:id])
        
        # debugger
        
        if @board && @board.destroy
            render json: ["You have succesfully deleted your board"]
        else
            render json: ["You can't destroy someone else's board"], status: 401
        end
    end

    private 

    def board_params
        params.require(:board).permit(:board_name, :author_id)
    end
end
