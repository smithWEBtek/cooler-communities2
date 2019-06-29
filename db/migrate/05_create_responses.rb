class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :survey_id, default: 1
      t.integer :question_id
      t.integer :user_id
      t.text :answer
      t.integer :points
 
      t.timestamps
    end
  end
end
