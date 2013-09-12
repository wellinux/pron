class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.references :patient
      t.date :data

      t.timestamps
    end
    add_index :records, :patient_id
  end
end
