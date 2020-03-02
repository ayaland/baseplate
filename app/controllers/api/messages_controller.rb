class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def new
        @message = Message.new
    end

    def create
        # project = Project.find_by(id: params[:project_id])
        @message = Message.new(message_params)

        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def show
        @message = Message.find(params[:id])
    end

    def index
        project = Project.find_by(id: params[:project_id])
        @messages = project.messages
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
    end

    private

    def message_params
        params.require(:message).permit(:title, :body, :project_id, :owner_id, :author_name)
    end
end