class RemoveProjectId < ActiveRecord::Migration[5.2]
  def change
    remove_column :todos, :project_id, :integer
  end
end
