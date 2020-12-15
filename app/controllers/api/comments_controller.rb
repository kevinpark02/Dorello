class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = current_user.comments.find_by(id: params[:id])
        # debugger
        if @comment && 
            ((@comment.card_id.to_s) == comment_params[:card_id]) && 
            ((@comment.creator_id.to_s) == current_user.id.to_s) &&
            @comment.update(comment_params)
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find_by(id: params[:id])
  
        if @comment && 
            ((@comment.creator_id.to_s) == current_user.id.to_s) && 
            @comment.destroy
            render json: ["You have successfully deleted your comment"]
        else
            render json: ["You cannot delete someone else's comment"]
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :card_id, :creator_id)
    end
end
