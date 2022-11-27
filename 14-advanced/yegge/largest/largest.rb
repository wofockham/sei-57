inputs = [-1, -4, -25, 7, -12]

# def largest(nums)
#     largest = -Float::INFINITY # Probably use nums.first
#     nums.each do |n|
#         largest = n if n > largest
#     end
#     largest
# end

# def largest(nums, max_seen=nums[0])
#     if nums.empty?
#         max_seen
#     else
#         max_seen = nums.first if nums.first > max_seen
#         largest nums.drop(1), max_seen
#     end
# end

# Everything is reduce.
def largest(nums)
    nums.reduce do |max_seen, n|
        puts "iterating: max_seen: #{ max_seen }, n: #{ n }"
        (n > max_seen) ? n : max_seen
    end
end

p largest(inputs)