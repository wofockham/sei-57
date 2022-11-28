ARGF.each do |line|
    puts line if line =~ /[A-Z][a-z]/ # Escaping: disabling the special meaning of the metacharacter.
end
