def hello
    puts "Hello World"
end

hello

# Parameters
def hello(name="World")
    puts "Hello #{ name }"
end

# TODO: Michael will research the splat operator

hello "Edgar"
hello "Pope Boniface"
hello # Variadic

# Return from methods
def add(a, b)
    a + b # The last line of code is implicitly returned
end

puts "The sum of 8 and 24 is #{ add 8, 24 }."
