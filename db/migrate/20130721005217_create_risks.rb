class CreateRisks < ActiveRecord::Migration
  def change
  	create_table :risks, :force => true do |t|
  		t.references :risk_category
  		t.string :nome_risco
  	end
  	add_index :risks, :risk_category_id
  end
end
