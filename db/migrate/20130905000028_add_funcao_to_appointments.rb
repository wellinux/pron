class AddFuncaoToAppointments < ActiveRecord::Migration
  def change
  	add_column :appointments, :secao, :string
    add_column :appointments, :funcao, :string
    add_column :appointments, :exame_fisico, :text
  end
end
