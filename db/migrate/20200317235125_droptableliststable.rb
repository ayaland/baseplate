class Droptableliststable < ActiveRecord::Migration[5.2]
  def change
    drop_table :table_lists
  end
end
