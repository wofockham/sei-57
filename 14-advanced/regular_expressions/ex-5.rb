# Alternatives:
# /S(atur|un)day/

# Capturing:
# /o(.)o/ # : \1

ARGF.each do |line|
    puts line if line =~ /(.)\1/ # Escaping: disabling the special meaning of the metacharacter.
end
