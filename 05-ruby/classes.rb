
# class Butterfly < ActiveRecord::Base
# end

# Classes produce objects.
# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the structure or the shape.
# Also, unlike a Ruby hash, an object can have methods (custom functions inside the object).

require 'pry'

# name, instrument, vice
class MarxBrother
    # Macro to write a getters and setters for you
    attr_accessor :name, :instrument, :vice
end

groucho = MarxBrother.new
groucho.name=('Groucho')
groucho.instrument=('guitar')

harpo = MarxBrother.new
harpo.name=('Harpo')
harpo.instrument=('harp')

binding.pry

