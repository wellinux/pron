class CreateExameCategories < ActiveRecord::Migration
  def change
    create_table :exame_categories do |t|
      t.string :nome

      t.timestamps
    end
  end
end
