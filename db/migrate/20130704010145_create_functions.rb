class CreateFunctions < ActiveRecord::Migration
  def change
    create_table :functions, :force => true do |t|
      t.string :funcao
      t.references :firm

      t.timestamps
    end
    add_index :functions, :firm_id
  end
end
