class Receituario < ActiveRecord::Base
  belongs_to :appointment

  attr_accessible :local, :prescricao, :appointment_id
end
