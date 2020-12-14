# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  board_name :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :board_name, :author_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :lists,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :List

    has_many :cards,
        through: :lists,
        source: :cards

    has_many :comments,
        through: :author,
        source: :comments
end
