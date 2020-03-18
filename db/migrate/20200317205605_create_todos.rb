class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :body
      t.integer :owner_id
      t.integer :list_id
      t.integer :project_id
      t.datetime :due_date
      t.boolean :done

      t.timestamps
    end
  end
end
