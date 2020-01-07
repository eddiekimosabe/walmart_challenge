Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
  	resources :items
  	resources :orders
  	resources :users
  end
  get '*path', to: 'client#index', constraints: lambda {|req| !req.xhr? && req.format.html?}
  root 'client#index'
end
