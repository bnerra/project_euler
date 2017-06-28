# Find the sum of all the multiples of 3 or 5 below 1000 (Ruby solution)

def sum_all
  num = 1000
  sum = 0
  for i in 1...num
    if (i%3 == 0 || i%5 == 0)
      sum += i
    end
  end
  return sum
end

sum_all
