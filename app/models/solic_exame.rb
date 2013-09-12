class SolicExame < ActiveRecord::Base
  belongs_to :appointment

  attr_accessible :local, :appointment_id
end
