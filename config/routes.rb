Rails.application.routes.draw do
  root 'sessions#new'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]
  resources :posts
  resources :replies, only: [:new, :create, :destroy]
end
