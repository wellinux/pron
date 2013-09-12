class AddIndexOnPatient < ActiveRecord::Migration
  def up
  	add_index :patients, [:matricula, :data_nascimento, :firm_id]
  end

  def down
  	remove_index :patients, [:matricula, :data_nascimento, :firm_id]
  end
end
