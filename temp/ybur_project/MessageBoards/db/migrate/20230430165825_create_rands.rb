class CreateRands < ActiveRecord::Migration[7.0]
  def change
    create_table :rands do |t|
      t.string :name
      t.string :age

      t.timestamps
    end
  end
end
