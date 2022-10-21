# Classes produce objects.
# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the structure or the shape.
# Also, unlike a Ruby hash, an object can have methods (custom functions inside the object).

require 'pry'

class Actor
    def award_speech
        "I would like to thank my agents my partner. We did it baby!"
    end

    def deny_allegations
        "I deny that and I don't remember and I was drunk and he's not my type"
    end
end

class Stooge < Actor
    def terrible?
        true
    end
end

# name, instrument, vice
class MarxBrother < Actor
    # Macro to write a getters and setters for you
    attr_accessor :name, :instrument, :vice

    def initialize(n='', i='', v='lampooning authority figures') # variadic
        @name = n
        @instrument = i
        @vice = v
    end

    def play
        "My name is #{ @name } and I play the #{ @instrument }"
    end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'
harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

chico = MarxBrother.new
chico.name = 'Chico'
chico.instrument = 'piano'

binding.pry

