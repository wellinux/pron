class Exame < ActiveRecord::Base
  belongs_to :exame_category
  has_many :complementary_exams
  attr_accessible :nome, :exame_category_id

end
