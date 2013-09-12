class Declaration < ActiveRecord::Base

  belongs_to :appointment

  attr_accessible :appointment_id, :local, :dia, :hora_inicio, :hora_termino, :anotacoes

  validates_presence_of :local, :dia, :hora_inicio, :hora_termino
end