class DropChestLift < ActiveRecord::Migration[5.2]
  def change
    drop_table :chest_lifts
  end
end
