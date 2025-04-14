#!/usr/bin/node
/* This is a Regex to extract Currency amounts such as: $19.99, $1,234.56 */

  let Sample = 'This is a test sample! filled with random numbers like: 0909-8888 99:88, 03:40 $19.99 $1,234.567.888099 $18928 $1.999.50 $1 $2.0 $ABCD '
  let RegexPattern = /\$\d*.*\d+/g
  let Result = Sample.match(RegexPattern)
  console.log(`Extracted Currency Formats: ${Result}`)
/*
 This Regex will match a currency pattern which will start with '$' charcter followed by any number and everything in
 between as long as ends with a number.
 \g: to match the pattern across the whole string
 \$: match '$' charcter
 \d*: matches any digit (0-9), (*) matches zero or more of the preceding token.
 .*\d+: (.*)matches zero or more charcter between the two digits like {(.)(,)...etc}.
*/

function TestCases() {
	
	let Case1 = '$'
  	let Test1 = RegexPattern.test(Case1)
  	console.log(`Test Case(1):(${Case1}) is ${Test1} because the dollar signs($) isn't followed by a number.`)
//return false.

  	let Case2 = 19.99
  	let Test2 = RegexPattern.test(Case2)
  	console.log(`Test Case(2):(${Case2}) is ${Test2} because it dosen't star with a dollar sign($).`)
//return false.

  	let Case3 = '$abcd'
  	let Test3 = RegexPattern.test(Case3)
  	console.log(`Test Case(3):(${Case3}) is ${Test3} because the dollar sign($) is followd by a letters.`)
//return false.

}
TestCases()
