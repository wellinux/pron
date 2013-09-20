class Function < ActiveRecord::Base
  belongs_to :firm
  has_many	:patients
  
  attr_accessible :funcao, :firm_id

  validates_presence_of :funcao, :firm_id

end
