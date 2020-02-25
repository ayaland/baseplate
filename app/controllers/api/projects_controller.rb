class Api::ProjectsController < ApplicationController
    before_action :require_logged_in

    def new
        @project = Project.new
    end

    def create
        @project = Project.new(project_params)

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end     
    end

    def show
        @project = Project.find(params[:id])
    end

    def index
        @projects = current_user.projects
        render :index
    end

    private

    def project_params
        params.require(:project).permit(:name, :description, :owner_id)
    end
end