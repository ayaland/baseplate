class CreateList < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :body
      t.integer :owner_id
      t.integer :project_id

      t.timestamps
    end
  end
end
