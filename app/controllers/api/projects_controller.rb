class Api::ProjectsController < ApplicationController
    before_action :require_logged_in

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
        # @projects = Project.find(params[:owner_id])
        # @projects = Project.all
        @projects = current_user.projects
        render :index
    end

    private

    def project_params
        params.require(:project, :name).permit(:description)
    end
end