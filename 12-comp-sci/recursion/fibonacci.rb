# Fibonacci Sequence
# 1 1 2 3 5 8 13 21 34 55
# fib(n) = fib(n-1) + fib(n-2)

require 'pry'
def fibonacci_iterative(n)
    # add the next two finabcci together n-2 times
    a = 1
    b = 1
    while n > 2
        a, b = b, a + b # Atomic parallel assignment
        n -= 1
    end

    b
end

def fibonacci_recursive(n)
    if (n <= 2)
        1
    else
        fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
    end
end

binding.pry