class OccupationalRisk < ActiveRecord::Base
	belongs_to :aso
	belongs_to :risk_category
	belongs_to :risk
  
 	attr_accessible :aso_id, :risk_id, :risk_category_id, :risk_category
end
