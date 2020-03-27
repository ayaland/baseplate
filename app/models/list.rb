class List < ApplicationRecord
    validates :title, :owner_id, :project_id, presence: true

    belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id,
    primary_key: :id

    has_many :todos, dependent: :destroy,
    foreign_key: :list_id
end