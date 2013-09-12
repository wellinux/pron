class CreateReceituarios < ActiveRecord::Migration
  def up
    create_table :receituarios do |t|
      t.references :appointment
      t.text :prescricao
      t.string :local

      t.timestamps
    end
    add_index :receituarios, :appointment_id
  end
  def down
  	remove_index :receituarios, :appointment_id
    drop_table :receituarios    
  end
end
