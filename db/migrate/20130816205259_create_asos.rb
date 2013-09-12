class CreateAsos < ActiveRecord::Migration
  def change
    create_table :asos, :force => true do |t|
      t.date        :data
      t.references  :appointment
      t.string      :periodicidade
      t.string      :grau_exposicao

      t.timestamps
    end
    add_index :asos, :appointment_id
  end
end
