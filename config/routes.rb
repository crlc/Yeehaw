Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit]
    resources :posts, only: [:create, :update, :destroy]
    resources :replies, only: [:create, :show, :update, :destroy]
  end
end
