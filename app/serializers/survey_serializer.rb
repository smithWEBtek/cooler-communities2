class SurveySerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :questions
  has_many :responses, through: :questions
  has_many :user_surveys
  has_many :users, through: :user_surveys
end
