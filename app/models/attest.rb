class Attest < ActiveRecord::Base
  belongs_to :appointment

  attr_accessible :data, :cid, :data_inicial, :local, :quantidade_dias, :appointment_id

  validates :quantidade_dias, numericality: { :less_than_or_equal_to => 15 }
end
