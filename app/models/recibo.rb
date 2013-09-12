class Recibo < ActiveRecord::Base
  belongs_to :patient
  attr_accessible :data, :pj, :referente, :valor, :patient_id, :valor_extenso
end
