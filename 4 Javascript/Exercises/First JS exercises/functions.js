//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"




	

// function dniLetter( dni ) {
// 		var remainder= dni%23
// 		var letters= ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
// 	 if (typeof dni === 'string'){ # this if is from the exercise 2
// 		return 'Invalid parameter';
// 	}
		
// 	else if (dni < 0) {
// 		return 'Invalid parameter';
// 	}
// 	else{ # the if from the exercise 2 ends here
// 		return letters[remainder]

	
// }
// }
	
	


// console.log( dniLetter( 12345678 ) === 'Z');
// console.log( dniLetter( 34667892 ) === 'S');
// console.log( dniLetter( 92234488 ) === 'A');




//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.



// console.log( dniLetter( -1 ) === 'Invalid parameter');
// console.log( dniLetter( "A1234567" ) === 'Invalid parameter');




//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.



// function findLongestWord(str){
// 	// var string = str.split(" ");  # this won't work because we are already passing an array below so it doesn't make sense the split.
//     // Step 1. Initiate a variable that will hold the length of the longest word
//    	var longest = 0;

//     // Step 2. Create the FOR loop
// 	for (var i = 0; i < str.length; i++){
// 		if (longest < str[i].length) { // If strSplit[i].length is greater than the word it is compared with...
//             longest = str[i].length; // ...then longestWord takes this new value    
//         }
//     }
//     //Step 3. Return the longest word
//     return longest;
// }


// console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) ===6 );
// console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) === 7 );
// console.log( findLongestWord( ["Red", "Blue", "Green"] ) === 5 );



//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.



// var array_lengths = [];
// array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) );
// array_lengths.push( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) );
// array_lengths.push( findLongestWord( ["Red", "Blue", "Green"] ) );
// //array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobbyhahahkahkhkahkhahhkah"]) );
// //<place to add more lines>, read next commented text and you will understand

// console.log( "These are the longest lengths of each group: " + array_lengths );
// console.log( calculateAverage( array_lengths ) === 6 && "The average of longest lengths is: " + calculateAverage( array_lengths ))


// function calculateAverage( array )
// {	var sum = 0
// 	for(var i=0; i<array.length; i++)
// 	{
// 		sum += array[i]
// 	}


//     return sum / array.length;
// 	//return( "Not implemented yet" )
// }


// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.




//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment this exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


// function charFreq( string ) {
//     var array_lengths = {}; // object

//     // compute frequencies of each value
//     for(var i = 0; i < string.length; i++) {
//         value = string[i];
//         if(value in array_lengths) {
//             array_lengths[value]++;
//         } else {
//             array_lengths[value] = 1;
//         }
//     }
//     return array_lengths;
// }





// counter = charFreq("abbabcbdbabdbdbabababcbcbab");
// console.log( counter['a'] === 7);
// console.log( counter.b === 14);
// console.log( counter['c'] === 3);

// counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
// console.log( counter.x === 7 );
// console.log( counter['y'] === 10 );
// console.log( counter.z === 3 );
// console.log( counter['a'] === 1 );
// console.log( counter['s'] === 1 );
// console.log( counter.d === 1 );
// console.log( counter['f'] === 1 );




//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.



function arrayAwesomenator( array ) 
{
	array = deleteRubbish( array );
	array = arrangeElements( array );
	array = beautifyLetters( array );
	array = beautifyNumbers( array );
	array = sortArray( array );
	array = arrayToString( array );

	return array;
}
function deleteRubbish( array )
{

	var index = array.indexOf('*');
	if (true) 
	{
    var result= array.splice(index, 1);
	}
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]
	return array;
}

function arrangeElements( array )
{
	//It receives an array with numbers and letters mixed and returns it with its items arrange:
	//First goes the numbers and then the letters. The order of the elements together does not matter.
	//Example: arrangeElements(['B', 'a', 4 , 23, 'J']) returns [23, 4, 'B', 'a', 'J']


	var newArray = [];
	array.forEach(function(element)
	{
		// Checks if character is a letter and not a number
		if(typeof element == "number")
		{
			newArray.unshift(element);
		}
		else {
			// pushes numbers to the array without making
			// any change to them
			newArray.push(element);
		}
	});
	// returns the array
	return newArray;
}
//console.log(arrangeElements(['B', 'a', 4 , 23, 'J']));



//function beautifyLetters(array) receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
    //Example: beautifyLetters([1,5,7,'a','J','p','E']) returns [1,5,7,'A','j',p,'E']

function beautifyLetters(array){
	var vowels = ["a", "e", "i", "o", "u"];
	var beautifiedArray = [];
	array.forEach(function(element)
	{
		// Checks if character is a letter and not a number
		if(typeof element == "string")
		{
			// checks if character is a vowel
			// and converts it to uppercase if it is
			if(vowels.includes(element.toLowerCase()))
			{
				beautifiedArray.push(element.toUpperCase());
			}
			else {
				// converts consonants to lowercase
				beautifiedArray.push(element.toLowerCase());
			}
		}
		else {
			// pushes numbers to the array without making
			// any change to them
			beautifiedArray.push(element);
		}
	});
	// returns the array
	return beautifiedArray;
}

//console.log(beautifyLetters([1,5,7,'a','J','p','E']));
// [1,5,7,'A','j',p,'E']

// 	// Alternative method where I need to make a function but the code works:

// var arr= [1,5,7,'a','J','p','E'];
// arr = arr.map(function(e){
//     e = /[BCDFGHJKLMNPQRSTVWXYZ]/g.test(e) ? e.toLowerCase() : e;
//     e = /[aeiou]/g.test(e) ? e.toUpperCase() : e;
//     return e;
// });
// console.log(arr);

	// 3rd alternative way: If I wanted to use the .replace function which can only be used in a string, I should have changed 
	// the array that I'm entering for a string by using ToString. This is the beginning of how it would look like:
// 	function consonantstoLowerCase( array )
// {

    
//     var result = array.toString().replace(/[bcdfghjklmnpqrstvwxyz]/ig, function (char)
//     // To make the regex case insensitive add i to the "g" at the end.
//     {
//         return char.toLowerCase();
//     });

//     console.log(result)
    
// }
	
	



function beautifyNumbers( array )
{
	// It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
	// Beautify process is to reduce a number into a single digit number by adding all its digits together: 
	// 123 = 6 because 1+2+3 = 6
	// 9 = 9
	// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
	// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1
	// Example: beautifyNumbers([23,59, 4,'A','b']) returns [5, 5, 4, 'A', 'b']

	var newArray = [];
	  array.forEach(function(element) {
	    // Checks if character is a letter and not a number
	    if (typeof element == "number") {
	      if(element %9 == 0 && element != 0)
	        newArray.push(9);
	      else 
	        newArray.push(element%9);
	    } else {
	      newArray.push(element);
	    }
	  });
	  return newArray;
}
//console.log(beautifyNumbers([23,59, 4,'A','b']))



//Alternative method using sumOfDigits instead of beautify and changing the argument to see if it still works:

// function sumOfDigits(num) {
//   // Check if value is number or alphanumeric
//   if (!isNaN(num)) {
//     // Convert number and split to get individual values.
//     // Loop over values and add them
//     var sum = num.toString().split("").reduce(function(p, c) {
//       // +p is a shorthand for parseInt(p)
//       return +p + +c;
//     });

//     // check if number is greater than 10. If yes, repeat the process
//     if (sum >= 10) sum = sumOfDigits(sum);
//     return sum;
//   } 
//   // if value is not number, return value
//   else return num;
// }

// var data = [123, 4, 567, 'a', "abc", 0];
// data.forEach(function(n) {
//   console.log(sumOfDigits(n))
// })


function sortArray( array )
{
	//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
	//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
	
	var nums= array.filter(function(element) {
	    // Checks if character is a letter and not a number
	    return typeof element === "number"; 
	    
	}).sort();	
	var string= array.filter(function(element) {
	    // Checks if character is a letter and not a number
	    return typeof element === "string"; 
	}).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    // The localeCompare() method returns a number indicating whether a reference string 
    // comes before or after or is the same as the given string in sort order.
});	
	// Concatonate the two arrays:
	return nums.concat(string);    
}
sortArray([5,5, 4, 1, 'j', 'A','b', 'E']);


function arrayToString( array )
{
	//It receives an array and returns a string with all its elements.
	//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"
return array.join("");
}

console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J" ]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");




