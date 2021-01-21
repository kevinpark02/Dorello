class AddIndexToCardOrder < ActiveRecord::Migration[5.2]
  def change
    add_index :lists, :card_order
  end
end
