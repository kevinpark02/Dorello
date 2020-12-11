# == Schema Information
#
# Table name: cards
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  due_date    :date
#  list_id     :integer          not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Card < ApplicationRecord
    validates :name, :list_id, :creator_id

    belongs_to :list,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: :List

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
end
