Rails.application.routes.draw do
  # Ayanote watch resource vs resources : one requires an id to find, the other assumes there can only be one
  # show/edit/update/destroy need an id for 'resources'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resources :projects
      resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end