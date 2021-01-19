class SwitchCardOrderTypeV2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :card_order
    add_column :lists, :card_order, :string, array: true, default: []
  end
end
