class AddAuthorNameToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_name, :string
  end
end
