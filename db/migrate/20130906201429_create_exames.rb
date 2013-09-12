class CreateExames < ActiveRecord::Migration
  def change
    create_table :exames, :force => true do |t|
      t.references :exame_category
      t.string :nome

      t.timestamps
    end
    add_index :exames, :exame_category_id
  end
end
