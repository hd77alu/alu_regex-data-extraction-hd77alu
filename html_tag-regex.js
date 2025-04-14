#!/usr/bin/node
//This is a Regex to extract an HTML Tag such as: <p>, <li>, <div class='sample'>, ...etc.

  let Sample = 'This is a test sample! filled with random strings like: ABCDEFGHIJKLMNOPQRSTUV >https://subdomain.exam.   org/pageLinks to an external site <> <-> <123> <img src="image.jpg" alt="descriptio> <HTML> <li class="list1"> <p>'
  let RegexPattern = /<[a-z]+.*>/gi
  let Result = Sample.match(RegexPattern)
  console.log(`Extracted HTML Tags Formats: ${Result}`)

/*
 This Regex will match an HTML TAG pattern which will start with a greater than Tag (<) followed by a letter
 (a-z or A-Z) and can then be followed by any combination of charcters & end with less than (>) Tag.
  \g: to match the pattern across the whole string.
  \i: to match UPPERCASE & lowercase alphabetic.
  [a-z]+: matches a range of alpabetic from A to Z, (+) to match 1 or more of the preceding token.
  .*> : (.*)matches zero or more charcter until the closing tag (>).
 */

function TestCases() {

  let Case1 = '<'
  let Test1 = RegexPattern.test(Case1)
  console.log(`Test Case(1):(${Case1}) is ${Test1} because it only has an opening Tag(<).`)
//return false.

  let Case2 = '<>'
  let Test2 = RegexPattern.test(Case2)
  console.log(`Test Case(2):(${Case2}) is ${Test2} because the tags(<>) are empty.`)
//return false.

  let Case3 = '<->'
  let Test3 = RegexPattern.test(Case3)
  console.log(`Test Case(3):(${Case3}) is ${Test3} because the tag(<>) starts with a random charcter.`)
//return false.

  let Case4 = '<123>'
  let Test4 = RegexPattern.test(Case4)
  console.log(`Test Case(4):(${Case4}) is ${Test4} because the tag (<>) starts with a number.`)
//return false.
}

TestCases()
