class CreateEvents < ActiveRecord::Migration
  def up
    create_table :events, :force => true do |t|
      t.references :patient
      t.datetime :start_at
      t.datetime :end_at
      t.boolean :all_day

      t.timestamps
    end
    add_index :events, :patient_id
  end

  def down
    remove_index :events, :patient_id
    drop_table :events
  end
end
