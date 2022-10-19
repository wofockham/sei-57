require 'sinatra'
require 'sinatra/reloader'

# ERB: Embedded Ruby: HTML with chunks of Ruby embedded in it.

get '/' do
    erb :home # automatically searches views/
end

get '/result' do
    x = params[:x].to_f
    y = params[:y].to_f

    # @instance variable
    @result = case params[:operator]
    when '+' then x + y
    when '-' then x - y
    when '*' then x * y
    when '/' then x / y
    end

    erb :result
end