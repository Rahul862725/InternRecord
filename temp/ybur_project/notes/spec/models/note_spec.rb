require 'rails_helper'

RSpec.describe Note, type: :model do
  it "is valid" do 
    note1 = Note.new()
    expect(note1.index).to be true  
  end
end
