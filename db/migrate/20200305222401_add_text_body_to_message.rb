class AddTextBodyToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :text_body, :string
    add_column :comments, :text_body, :string
  end
end
