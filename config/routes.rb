Rails.application.routes.draw do
  # resources :todos
  # Ayanote watch resource vs resources : one requires an id to find, the other assumes there can only be one
  # show/edit/update/destroy need an id for 'resources'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]

      resources :projects do
        resources :messages, only: [:index, :show, :create]
        resources :lists, only: [:index, :show, :create]
      end

      resources :messages do
        resources :comments
      end
      
      resources :lists do
        resources :todos
      end
  end

  root "static_pages#root"
end
