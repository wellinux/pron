class Patient < ActiveRecord::Base
  belongs_to :firm
  has_many   :records
  has_many   :recibos, :dependent =>  :destroy
  has_many   :events, :dependent  =>  :destroy
  has_many   :appointments, :through => :records

  attr_accessible	:data_nascimento, :documento, :matricula, 
			  					:nome_mae, :sexo, :firm_id, :section,
			  					:tipo_documento, :function, :nome

  validates_presence_of :data_nascimento, :documento, :matricula, :nome, :nome_mae, :sexo, :firm

  validates_numericality_of :matricula, :only_integer => true

end
