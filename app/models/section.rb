class Section < ActiveRecord::Base
  belongs_to :firm
  has_many	:patients
  attr_accessible :secao, :firm_id

  validates_presence_of :firm_id, :secao
end
