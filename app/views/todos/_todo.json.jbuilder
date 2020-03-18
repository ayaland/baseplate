json.extract! todo, :id, :body, :owner_id, :list_id, :project_id, :due_date, :done, :created_at, :updated_at
json.url todo_url(todo, format: :json)
