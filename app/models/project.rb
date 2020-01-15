class Project < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id 
    
    has_many :todos

end
