class CreateSolicExames < ActiveRecord::Migration
  def up
    create_table :solic_exames do |t|
      t.references :appointment
      t.string :local

      t.timestamps
    end
    add_index :solic_exames, :appointment_id
  end

  def down
  	remove_index :solic_exames, :appointment_id
    drop_table :solic_exames     
  end
end
