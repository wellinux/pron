class Firm < ActiveRecord::Base
	has_many :patients
	has_many :sections
	has_many :functions
	
	usar_como_cnpj :cnpj

	attr_accessible :atividade, :bairro, :cep, :cidade, :cnae, :cnpj, :endereco, :frente_trabalho, :nome_fantasia, :razao_social, :risco, :telefone, :uf

	validates_presence_of :atividade, :bairro, :cep, :cidade, :cnae, :cnpj, :endereco, :nome_fantasia, :razao_social, :risco, :telefone, :uf

	accepts_nested_attributes_for :patients, :sections, :functions, allow_destroy: true

end
