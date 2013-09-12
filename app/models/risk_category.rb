class RiskCategory < ActiveRecord::Base
	has_many :risks, :dependent => :destroy

	accepts_nested_attributes_for :risks, reject_if: :all_blank, :allow_destroy => true

	attr_accessible :nome, :appointment_id, :risks_attributes
	
end
