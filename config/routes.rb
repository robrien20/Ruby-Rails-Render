Rails.application.routes.draw do
  devise_for :users
 get 'render/index'

 # For more details on this file's DSL, see https://guides.rubyonrails.org/routing.html
 root 'render#index'end
