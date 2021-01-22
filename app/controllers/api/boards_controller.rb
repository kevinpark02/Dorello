class Api::BoardsController < ApplicationController
    
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]
    
    def index #this works
        @boards = Board.all
        render :index
    end

    def show #this works
        # @board = Board.find_by(id: params[:id])
        @board = Board.includes(:lists, :cards, :comments).find_by(id: params[:id])
        # @board_c = Board.includes(:cards).find_by(id: params[:id]) 
        # debugger
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

        # debugger

        # @board = current_user.boards.find_by(id: params[:id])
        @board = Board.find_by(id: params[:id])

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
        params[:board][:list_order] = [] if params[:board][:list_order] == nil
        params.require(:board).permit(:id, :board_name, :author_id, list_order: [])
    end
end
