class Api::ProjectsController < ApplicationController
    before_action :require_logged_in

    def create
        @project = Project.new(project_params)

        if @project.save
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 422
    end

    private

    def project_params
        params.require(:project, :name).permit(:description)
    end
end