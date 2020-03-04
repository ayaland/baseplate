class Message < ApplicationRecord
    validates :body, :project_id, :owner_id, :author_name, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id

    belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id,
    primary_key: :id

    has_many :comments, dependent: :destroy,
    foreign_key: :message_id

end