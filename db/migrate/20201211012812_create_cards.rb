class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.text :description
      t.date :due_date
      t.integer :list_id, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :cards, :list_id
    add_index :cards, :creator_id
  end
end
