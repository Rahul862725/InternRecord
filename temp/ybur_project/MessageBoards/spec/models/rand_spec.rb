require 'rails_helper'

RSpec.describe Rand, type: :model do
 it "age must be 15" do 
  dummy = FactoryBot.build(:rand, age:"16")
  expect(dummy).to  eq("1s6") 
 end
end
