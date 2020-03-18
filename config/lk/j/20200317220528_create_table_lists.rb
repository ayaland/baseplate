class CreateTableLists < ActiveRecord::Migration[5.2]
  def change
    create_table :table_lists do |t|
      t.string :title
      t.integer :owner_id
      t.integer :project_id
    end
  end
end
