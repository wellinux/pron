class CreateRecibos < ActiveRecord::Migration
  def up
    create_table :recibos do |t|
      t.date :data
      t.references :patient
      t.decimal :valor
      t.string :valor_extenso
      t.text :referente
      t.boolean :pj

      t.timestamps
    end
    add_index :recibos, :patient_id
  end

  def down
    remove_index :recibos, :patient_id
    drop_table :recibos
  end
end
