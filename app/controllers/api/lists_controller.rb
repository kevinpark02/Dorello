class Api::ListsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create #this works
        @list = List.new(list_params)

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def update #this works
        # debugger
        @list = List.find_by(id: params[:id])
        # debugger
        if @list && ((@list.board_id.to_s) == list_params[:board_id]) && @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy #this works
        @list = List.find_by(id: params[:id])

        if @list && @list.destroy
            render json: ["You have successfully deleted your list"]
        end
    end

    private

    def list_params
        params.require(:list).permit(:title, :board_id, :creator_id)
    end
end
