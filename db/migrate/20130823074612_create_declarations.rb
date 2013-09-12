class CreateDeclarations < ActiveRecord::Migration
  def change
    create_table :declarations, :force => true do |t|
      t.references :appointment
      t.date       :dia
      t.string     :hora_inicio
      t.string     :hora_termino
      t.string     :local
      t.text       :anotacoes

      t.timestamps
    end
    add_index :declarations, :appointment_id
  end
end
