Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :followings, only: [:create, :destroy]
    resources :groups, except: [:new, :edit]
    resources :posts, except: [:new, :edit] do
      member do
        post 'like',    to: 'posts#upvote'
        post 'dislike', to: 'posts#downvote'
        post 'unlike',    to: 'posts#unupvote'
        post 'undislike', to: 'posts#undownvote'
      end
    end
    resources :replies, except: [:new, :edit] do
      member do
        post 'like',    to: 'replies#upvote'
        post 'dislike', to: 'replies#downvote'
        post 'unlike',    to: 'replies#unupvote'
        post 'undislike', to: 'replies#undownvote'
      end
    end
  end
end
