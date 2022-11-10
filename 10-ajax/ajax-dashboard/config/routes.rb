Rails.application.routes.draw do
  root :to => 'pages#home' # entry point

  # API end points
  get '/api/brother' => 'dashboard#brother'
  get '/api/time' => 'dashboard#time'
  get '/api/uptime' => 'dashboard#uptime'
  get '/api/info' => 'dashboard#info'

  resources :butterflies, :only => [:index, :show]
end
