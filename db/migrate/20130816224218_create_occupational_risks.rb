class CreateOccupationalRisks < ActiveRecord::Migration
  def change
    create_table :occupational_risks, :force => true do |t|
      t.references :aso
      t.references :risk_category
      t.references :risk

      t.timestamps
    end
    add_index :occupational_risks, :aso_id
    add_index :occupational_risks, :risk_id
    add_index :occupational_risks, :risk_category_id
  end
end
