(1..12).each do |x|
    (1..12).each do |y|
        print '%4d' % (x * y) # %: sprintf shorthand
    end
    puts
end
