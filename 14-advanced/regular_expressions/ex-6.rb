# Alternatives:
# /S(atur|un)day/

# Capturing:
# /o(.)o/ # : \1

ARGF.each do |line|
    puts line if line =~ /wilma/ && line =~ /fred/ # /(wilma.*fred|fred.*wilma)/
end
