class Api::TodosController < ApplicationController
  before_action :require_logged_in
  
  def new
    @todo = Todo.new
  end
  
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
        render :show
    else
        render json: @todo.errors.full_messages, status: 422
    end
  end
    
  def show
    @todo = Todo.find(params[:id])
  end
  
  def index
    list = List.find_by(id: params[:list_id])
    @todos = list.todos
  end


  def edit
  end

  def update
    @todo = Todo.find_by(id: params[:id])

    if @todo.update(todo_params)
      render :show
    else
      render json: @todo.errors.full_messages, status: 404
    end
  end

  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: 'Todo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:body, :owner_id, :list_id, :due_date, :done)
    end
end
