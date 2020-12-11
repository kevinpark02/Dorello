class Api::CardsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @card = Card.new(card_params)

        if @card.save
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])
        debugger
        if @card && ((@card.list_id.to_s) == card_params[:list_id]) && ((@card.creator_id.to_s) == card_params[:creator_id]) && @card.update(card_params)
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])
        if @card && @card.destroy
            render json: ["You have succesffully deleted your card"]
        end
    end

    private

    def card_params
        params.require(:card).permit(:name, :list_id, :creator_id)
    end
end
