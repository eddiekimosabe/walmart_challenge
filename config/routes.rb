Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
  	resources :users do 
  		resources :orders
  	end
  	resources :orders
  	resources :items
  end
  get '*path', to: 'client#index', constraints: lambda {|req| !req.xhr? && req.format.html?}
  root 'client#index'
end
