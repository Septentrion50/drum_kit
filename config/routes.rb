Rails.application.routes.draw do
  root 'drum#index'
  resources 'drum', only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
