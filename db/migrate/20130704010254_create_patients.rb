class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients, :force => true do |t|
      t.references :firm
      t.string :matricula
      t.string :nome
      t.date :data_nascimento
      t.string :nome_mae
      t.string :sexo
      t.string :documento
      t.string :tipo_documento      
      t.string :section
      t.string :function

      t.timestamps
    end
    add_index :patients, :firm_id
  end
end
