class CreateOccupationalRisk < ActiveRecord::Migration
  def change
  	change_table :occupational_risks, :force => true do |t|
  		t.references :risk_category
  		t.string :nome_risco
  	end
  	add_index :occupational_risks, :risk_category_id
  end
end
