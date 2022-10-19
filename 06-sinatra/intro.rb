require 'sinatra'
require 'sinatra/reloader' # care of sinatra-contrib

# DSL: Domain Specific Language

get '/' do
    "Hello world from the home page AKA root page WOW"
end

get '/hello' do
    "Hello World from Sinatra"
end

get '/goodbye' do
    "Goodbye cruel world"
end

# Dynamic content
get '/lucky' do
    "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
    "The server uptime is #{ `uptime` }"
end

# Dynamic URLs

# Marx Brothers Fan Club: $500

# Infinite number of names can appear in the URL here
get '/fanclub/:name' do
    "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

# $700
get '/fanclub/:first/:last' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium of the Marx Brothers fan club"
end

# $1000
get '/fanclub/:first/:last/:favorite' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum of the Marx Brothers fan club. Their favorite Marx Brother is #{ params[:favorite] }"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
    result = params[:x].to_f * params[:y].to_f
    "The result is <strong>#{ result }"
end

# TWO SERIOUS COMPLAINTS
# If this is a web server, where is goddamn HTML?
# How do we get user input without making the poor slobs edit the URL by hand?