Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "vanillas/omikuji"
  get "vanillas/pwd_generator"

  get "home/top"


  root "home#top"
end
