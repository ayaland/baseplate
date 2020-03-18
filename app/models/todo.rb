class Todo < ApplicationRecord
    validates :body, :list_id, :owner_id, presence: true

    belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id,
    primary_key: :id
end
