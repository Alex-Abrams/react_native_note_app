class CreateChestLift < ActiveRecord::Migration[5.2]
  def change
    create_table :chest_lifts do |t|
      t.string :lift, null: false
      t.string :sets_lifts_weight
      
      t.timestamps
    end
  end
end
