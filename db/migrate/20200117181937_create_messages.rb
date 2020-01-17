class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :body
      t.integer :owner_id
      t.integer :project_id

      t.timestamps
    end
  end
end
