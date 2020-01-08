class User < ApplicationRecord
    has_many :projects
    has_many :todos
    has_many :messages

end