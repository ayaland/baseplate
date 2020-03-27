class Api::ListsController < ApplicationController
    before_action :require_logged_in

    def new
        @list = List.new
    end

    def create
        @list = List.new(list_params)

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show
        @list = List.find(params[:id])
    end

    def index
        project = Project.find_by(id: params[:project_id])
        @lists = project.lists
    end

    def destroy
        @list = List.find_by(id: params[:id])
        @list.destroy
    end

    private

    def list_params
        params.require(:list).permit(:title, :project_id, :owner_id)
    end
end
