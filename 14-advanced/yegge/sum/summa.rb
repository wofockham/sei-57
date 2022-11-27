integers = File.open 'integers.txt'

sum = 0

integers.each do |line|
    i = line.to_i
    sum += i
end

puts sum
