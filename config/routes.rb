Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :notes, only: [:index, :create]

  resource :user, only: [:create]

  resource :session, only: [:create, :destroy, :show]
end
