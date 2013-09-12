class AddAttachmentToComplementaryExams < ActiveRecord::Migration
  def self.up
  	remove_column		:complementary_exams, :imagem
  	remove_column		:complementary_exams, :imagem_uid
  	remove_column		:complementary_exams, :file_uid
    add_attachment	:complementary_exams, :imagem
  end

  def self.down
  	add_column				:complementary_exams, :imagem
    remove_attachment	:complementary_exams, :imagem
  end
end
