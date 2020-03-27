class Todo < ApplicationRecord
    validates :body, :list_id, :owner_id, presence: true

    belongs_to :list,
    class_name: 'List',
    foreign_key: :list_id,
    primary_key: :id
end
