Rails.application.routes.draw do
  root :to => 'pages#goodbye'

  get '/hello' => 'pages#hello' # 'controller#action'
  get '/goodbye' => 'pages#goodbye'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:operator/:y' => 'calculator#calculate'
end
