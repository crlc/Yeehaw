Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :followings, only: [:create, :destroy]
    resources :groups, except: [:new, :edit]
    resources :posts, except: [:new, :edit] do
      member do
        put 'like',    to: 'posts#upvote'
        put 'dislike', to: 'posts#downvote'
      end
    end
    resources :replies, except: [:new, :edit] do
      member do
        put 'like',    to: 'replies#upvote'
        put 'dislike', to: 'replies#downvote'
      end
    end
  end
end
