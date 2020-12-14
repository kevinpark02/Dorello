# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  card_id    :integer          not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :card_id, :creator_id, presence: true

    belongs_to :card,
        primary_key: :id,
        foreign_key: :card_id,
        class_name: :Card

    belongs_to :commentor,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
end
