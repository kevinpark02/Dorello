class Api::ListsController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def create
        @list = List.new(list_params)

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def update
        @list = List.find_by(id: params[:id])

        if @list && @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
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
