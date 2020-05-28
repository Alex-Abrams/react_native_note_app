Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :notes, only: [:index, :create]

  resources :users, only: [:create, :show] ### oringal

  # resource :user, only: [:create, :show]

  resource :session, only: [:create, :destroy, :show, :update]
end
