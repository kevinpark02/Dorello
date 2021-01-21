class AddListOrderToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :list_order, :string, array: true, default: []
    add_index :boards, :list_order
  end
end
