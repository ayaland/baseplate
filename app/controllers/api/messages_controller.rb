class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def create
        project = Project.find_by(id: params[:project_id])
        @message = project.messages.new(message_params)

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
        @messages = current_project.messages
        render :index
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
    end

    private

    def message_params
        params.require(:message).permit(:title, :body, :owner_id, :project_id)
    end
end