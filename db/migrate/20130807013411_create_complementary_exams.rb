class CreateComplementaryExams < ActiveRecord::Migration
  def change
    create_table :complementary_exams, :force => true do |t|
      t.references  :appointment
      t.references  :exame
      t.date        :data
      t.text        :descricao_resultado

      t.timestamps
    end
    add_index :complementary_exams, :appointment_id
  end
end
