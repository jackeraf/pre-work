puts 'What is the source file?'
source_file = gets.chomp
puts 'what\'s the name of your final source file?'
response = gets.chomp
source_file_contents = IO.read(source_file)
IO.write(response, source_file_contents)  
 #replace file_name and file_contents with the correct variables
