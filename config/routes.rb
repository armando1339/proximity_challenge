Rails.application.routes.draw do
  resources :sessions, only: %i[ show new create ] do
    collection do
      delete 'logout', action: :destroy, controller: 'sessions'
    end
  end

  root to: 'sessions#new'
end
