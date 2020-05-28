class CreateLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.string :lift, null: false
      t.string :sets_lifts_weight, null: false
      t.integer :lift_num, null: false
      t.integer :heaviest, null: false
      t.integer :workout_id, null: false

      t.timestamps
    end

    add_index :lifts, :workout_id
  end
end
