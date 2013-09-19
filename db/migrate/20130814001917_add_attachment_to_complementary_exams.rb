class AddAttachmentToComplementaryExams < ActiveRecord::Migration
  def self.up
    add_attachment	:complementary_exams, :imagem
  end

  def self.down
  	add_column			:complementary_exams, :imagem
    remove_attachment	:complementary_exams, :imagem
  end
end
