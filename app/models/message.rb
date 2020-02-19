class Message < ApplicationRecord
    validates :project_id, :body, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id

    belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id,
    primary_key: :id

end