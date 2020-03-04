class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :owner_id
      t.integer :message_id
      t.string :author_name

      t.timestamps
    end
  end
end
