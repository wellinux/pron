class RenameOccupatinalRisksToRisks < ActiveRecord::Migration
  def self.up
    remove_index :occupational_risks, :risk_category_id
    rename_table :occupational_risks, :risks
    add_index 	 :risks, :risk_category_id
  end 

  def self.down
    remove_index :risks, :risk_category_id
    rename_table :risks, :occupational_risks
    add_index    :risks, :risk_category_id
  end
end
