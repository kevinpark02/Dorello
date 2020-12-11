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
require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
