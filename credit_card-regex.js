#!/usr/bin/node
// This is a Regex to extract Credit card numbers such as: 1234 5678 9012 3456, 1234-5678-9012-3456...etc.


  let Sample = 'This is a test sample! filled with random numbers like: 007 07959833576 13:00 9000-1221-0021-2020 1234 5678 9012 3456 ABCD_EFGH_IGKL_MNOP 1234567890123456'
  let RegexPattern = /\d{4}[-\s]\d{4}[-\s]\d{4}[-\s]\d{4}/g
  let Result = Sample.match(RegexPattern)
  console.log(`Extracted Credit Cards Formats: ${Result}`)

/*
 This Regex will match a Credit Card pattern which must begin with a group of four consecutive digits, followed by
 three more four digits groups seprated by (-) or a whitespace.
 /g: to match the pattern across the whole string.
 \d: matches any digit (0-9).
 {4}: matches digits groups of four.
 [-\s]: matches (-) charcter or (\s) whitespace character.
*/

function TestCases() {
	
	let Case1 = 'ABCD-EFGQ-LMNO-PQRS'
  	let Test1 = RegexPattern.test(Case1)
  	console.log(`Test Case(1):(${Case1}) is ${Test1} because they are a group of letters not digits.`)
//return false.

  	let Case2 = 1234567890123456
  	let Test2 = RegexPattern.test(Case2)
  	console.log(`Test Case(2):(${Case2}) is ${Test2} because those are just random digits without any relationship.`)
//return false.

  	let Case3 = '1234-5678-9012-345'
  	let Test3 = RegexPattern.test(Case3)
  	console.log(`Test Case(3):(${Case3}) is ${Test3} because the last digits group isn't complete.`)
//return false.

  	let Case4 = '1234:5678?9012_3456'
  	let Test4 = RegexPattern.test(Case4)
  	console.log(`Test Case(4):(${Case4}) is ${Test4} because the digits aren't seprated with (-) or whitespace.`)
//return false.

}

TestCases()
