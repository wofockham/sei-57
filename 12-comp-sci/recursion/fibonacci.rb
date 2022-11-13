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

# Make this faster:

# Option 1: memoisation

def fib_memo(n)
    @fib ||= {} # assigns the empty hash to @fib if it doesn't already have a value
    if @fib[n] # if we have previously saved this Fibonacci number
        @fib[n] # return the value immediately
    elsif n <= 2
        1 # base case
    else
        @fib[n] = fib_memo(n-1) + fib_memo(n-2) # calculate and save this number for later use
    end
end

# Option 2: iterative recursion
def fib(n, a=1, b=1)
    if n == 1 || n == 2 # base case
        b
    else
        fib n-1, b, a+b # Almost mystical
    end
end

binding.pry