class Risk < ActiveRecord::Base

  belongs_to 	:risk_category
  
  attr_accessible :nome_risco, :risk_category_id

  validates_presence_of :nome_risco, :risk_category
end