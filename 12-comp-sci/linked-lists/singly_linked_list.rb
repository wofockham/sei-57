class SinglyLinkedList
    class Node
        attr_accessor :value, :next
    
        def initialize(value=nil)
            @value = value
            @next = nil
        end
    end

    attr_accessor :head

    def initialize(value=nil)
        @head = Node.new(value) unless value.nil?
    end

    def prepend(value) # unshift
        node = Node.new value
        node.next = @head
        @head = node
        self # this allows chaining
    end

    def append(value)
        # TODO: what if the list is empty?
        last.next = Node.new value
        self # this allows chaining
    end

    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next
        end
        current_node
    end

    # TODO: More methods
    def remove # AKA .shift -- remove the first node
    end

    def insert_after(node, new_value)
    end

    def find(needle) # return the node with value of needle (or nil)
    end

    # Tricky
    def reverse # non-destructive
    end

    # Trickier
    def reverse!
    end

    # Trickiest
    def each # how do you execute a block in Ruby?
    end

    # Bonus: .map(), .reduce(), .select(), .reject(), .length() AKA .size() AKA count()
    # Bonus .at_index(3) # equivalent bros[3]
end


bros = SinglyLinkedList.new 'Groucho'

require 'pry'
binding.pry

