class CreateApointments < ActiveRecord::Migration
  def up
    create_table :appointments, :force => true do |f|
      f.references :record
      f.date    :data
      f.string  :ordem_exame
      f.string  :categoria_exame
      f.float   :altura
      f.float   :peso
      f.string  :imc
      f.string  :pa
      f.string  :pulso
      f.text    :anamnese
      t.string  :status
      f.string  :conclusao
    end
    add_index :appointments, :record_id
  end

  def down
    remove_index :appointments, :record_id
    drop_table :appointments
  end
end
