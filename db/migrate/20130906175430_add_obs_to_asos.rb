class AddObsToAsos < ActiveRecord::Migration
  def change
    add_column :asos, :obs, :text
  end
end
