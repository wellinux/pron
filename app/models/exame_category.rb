class ExameCategory < ActiveRecord::Base
	has_many :exames, :dependent => :destroy

	accepts_nested_attributes_for :exames, reject_if: :all_blank, :allow_destroy => true

  attr_accessible :nome, :exames_attributes

end
