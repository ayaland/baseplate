class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def new
        @comment = Comment.new
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    # def show
    #     @comment = Comment.find(params[:id])
    # end

    def index
        message = Message.find_by(id: params[:message_id])
        @comments = message.comments
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :message_id, :owner_id, :author_name)
    end
end