def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    # TODO: add other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Actual addition coming soon" # TODO: actually do the actual addition, somehow
    # TODO: add more `when` clauses for subtract, multiply, divide, etc
    else
        puts "Invalid selection. You idiot."
    end
    
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"