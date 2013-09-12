class ComplementaryExam < ActiveRecord::Base
	belongs_to :appointment
	belongs_to :exame

	has_attached_file :imagem, :styles => { :original => "800x600>", :medium => "300x300>", :thumb => "25x25>" }, 
																					:default_url => "/images/:style/missing.png"
		
	attr_accessible :data, :exame_id, :descricao_resultado, :imagem, :appointment_id

end
