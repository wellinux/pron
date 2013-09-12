class Aso < ActiveRecord::Base
  belongs_to	:appointment
  has_many  	:occupational_risks, :dependent => :destroy
  has_many		:risks, :through => :occupational_risks
  
  accepts_nested_attributes_for :occupational_risks, reject_if: :all_blank, :allow_destroy => true

  attr_accessible :risk_category, :data, :grau_exposicao, :obs,
  								:periodicidade, :appointment_id, :occupational_risks_attributes
end
