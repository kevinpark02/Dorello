class AddCardOrderToList < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :card_order, :integer, array: true, default: []
    add_index :lists, :card_order
  end
end
