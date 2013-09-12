class CreateAttests < ActiveRecord::Migration
  def up
    create_table :attests do |t|
      t.references  :appointment
      t.date        :data
      t.string      :cid     
      t.integer     :quantidade_dias
      t.date        :data_inicial
      t.string      :local

      t.timestamps
    end
    add_index :attests, :appointment_id
  end

  def down
    remove_index :attests, :appointment_id
    drop_table :attests
  end
end
