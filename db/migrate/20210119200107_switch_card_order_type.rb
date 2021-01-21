class SwitchCardOrderType < ActiveRecord::Migration[5.2]
  def change
    change_column :lists, :card_order, :string
  end
end
