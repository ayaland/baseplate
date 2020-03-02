class Comment < ApplicationRecord
    validates :body, :project_id, :owner_id, :author_name, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id

    belongs_to :message,
    class_name: 'Message',
    foreign_key: :message_id,
    primary_key: :id
    
end