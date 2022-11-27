# def reverse(input)
#     input.reverse
# end

def reverse(input)
    output = ''
    input.each_char do |char|
        output = char + output
    end
    output
end

puts reverse('hotdogs')

