class Record < ActiveRecord::Base
  belongs_to	:patient
  has_many		:appointments
  has_many		:attests, :through => :appointments

  attr_accessible :data, :patient_id
end
