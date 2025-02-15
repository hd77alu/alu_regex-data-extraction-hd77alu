#!/usr/bin/node
//This is a Regex to extract an HTML Tag such as: <p>, <li>, <div class='sample'>, ...etc.

  let Sample = 'This is a test sample! filled with random strings like: ABCDEFGHIJKLMNOPQRSTUV >https://subdomain.exam.   org/pageLinks to an external site <> <-> <123> <img src="image.jpg" alt="descriptio> <HTML> <li class="list1"> <p>'
  let RegexPattern = /<[a-z]+.*>/gi
  let Result = Sample.match(RegexPattern)
  console.log(Result)

/*
 This Regex will match an HTML TAG pattern which will start with a greater than Tag (<) followed by a letter
 (a-z or A-Z) and can then be followed by any combination of charcters & end with less than (>) Tag.
  \g: to match the pattern across the whole string.
  \i: to match UPPERCASE & lowercase alphabetic.
  [a-z]+: matches a range of alpabetic from A to Z, (+) to match 1 or more of the preceding token.
  .*> : (.*)matches zero or more charcter until the closing tag (>).
 */

  let Case1 = '<'
  let Test1 = RegexPattern.test(Case1)
  console.log(Test1)
//return false because it only has an opening Tag(<).

  let Case2 = '<>'
  let Test2 = RegexPattern.test(Case2)
  console.log(Test2)
//return false because the tags(<>) are empty.

  let Case3 = '<->'
  let Test3 = RegexPattern.test(Case3)
  console.log(Test3)
//return false because the tag(<>) starts with a random charcter.

  let Case4 = '<123>'
  let Test4 = RegexPattern.test(Case4)
  console.log(Test4)
//return false because the tag (<>) starts with a number.
