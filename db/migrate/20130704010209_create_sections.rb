class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections, :force => true do |t|
      t.string :secao
      t.references :firm

      t.timestamps
    end
    add_index :sections, :firm_id
  end
end
