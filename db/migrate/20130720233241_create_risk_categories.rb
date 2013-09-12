class CreateRiskCategories < ActiveRecord::Migration
  def change
    create_table :risk_categories, :force => true do |t|
      t.string :nome

      t.timestamps
    end
  end
end
