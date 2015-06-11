Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :followings, only: [:create, :destroy]
    resources :groups, except: [:new, :edit]
    resources :posts, except: [:new, :edit]
    resources :replies, except: [:new, :edit]
  end
end
