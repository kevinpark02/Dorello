class Api::BoardsController < ApplicationController
    
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]
    
    def index
        @boards = Board.all
        render :index
    end

    def show
        @board = Bench.find_by(id: params[:id])
    end

    def create
        @board = Bench.create(board_params)

        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Bench.find_by(id: params[:id])

        if @board && @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = current_user.boards.find_by(id: params[:id])

        if @board && @board.destroy
            render :index
        else
            render @board.errors.full_messages, status: 422
        end
    end

    private 

    def board_params
        params.require(:bench).permit(:board_name, :author_id)
    end
end
