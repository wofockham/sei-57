ARGF.each do |line|
    puts line if line =~ /\./ # Escaping: disabling the special meaning of the metacharacter.
end
