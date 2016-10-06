
string= "hello three house"
numbers= string.chars.map { |e| e.ord }   
#The chars method splits the string into an array of characters and it returns an enumerator. As a result we can call map on the array. The map method is very useful when we want to transform all the elements of an array in some way. The return value of map is another array with the transformed elements.

#Instead of chars method, would have been also correct with string.split(//) that would have separated the letters of each word in the array
shifted= numbers.map { |e| e + 1 }
shifted.map { |e| e.chr }.join  #map will turn the numbers back to letters, and join will give us the encrypted string
