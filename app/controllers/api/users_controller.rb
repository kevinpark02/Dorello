class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        # debugger
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: ["Please attach a photo"]
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :photo)
    end
end
