class CreateRisks < ActiveRecord::Migration
  def up
  	create_table :risks, :force => true do |t|
  		t.references :risk_category
  		t.string :nome_risco
  	end
  	add_index :risks, :risk_category_id
  end

  def down
  	aremove_index :risks, :risk_category_id
  	drop_table :risks
  end
end
