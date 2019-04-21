Rails.application.routes.draw do
  resources :stories
  resources :songs
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  get '/playlist1', to: 'songs#songlist'

end
