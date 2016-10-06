array= (1..100)
for i in array
	if i % 3 ==0 && i % 5 ==0
		puts "FizzBuzz"
	elsif i % 5==0
		puts "Buzz"
	elsif i % 3== 0
		puts "Fizz"
		else
		puts i	
end
end
