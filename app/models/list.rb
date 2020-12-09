# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
    validates :title, :board_id, :creator_id, presence: true

    belongs_to :board,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :Board

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

end
