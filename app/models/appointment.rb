class Appointment < ActiveRecord::Base
  belongs_to	:record
  has_many		:asos,									:dependent => :destroy
  has_many		:complementary_exams,		:dependent => :destroy
  has_many    :exames, :through =>    :complementary_exams
  has_many		:declarations,					:dependent => :destroy
  has_many		:attests,               :dependent =>	:destroy
  has_many		:solic_exames,          :dependent => :destroy
  has_many    :receituarios,          :dependent => :destroy
  
  accepts_nested_attributes_for :complementary_exams, reject_if: :all_blank, :allow_destroy => true

  attr_accessible :record_id, :altura, :anamnese, :exame_fisico, :categoria_exame,
  								:conclusao, :data, :imc, :ordem_exame, :pa, :peso,
  								:pulso, :status, :complementary_exams_attributes, :funcao, :secao

  validates_numericality_of :peso, :altura

   before_create :increment_ordem_exame
 
  def increment_ordem_exame
    if self.record.appointments.count >= 1
      self.ordem_exame = (self.record.appointments.last.ordem_exame).to_i + 1
    else
      self.ordem_exame = 1
    end
  end

  before_create :imc

  def imc
   self.imc = (self.class.nil?) ? 'insira peso e altura' : ((peso.to_f) / ((altura.to_f) **2))
  end
end