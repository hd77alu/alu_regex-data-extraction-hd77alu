#!/usr/bin/node
//This a Regex pattern to extract a Hashtag such as: #example, #ThisHashtag...etc.


  let Sample = 'This is a test sample! filled with random strings like: ABCDEFGHIJKLMNOPQRSTUV >https://subdomain.example.org/pageLinks to an external site #007 #1st_place #ThisIsAHashtag #example #NO-Pain_No_Gain #ALU  #Bond007'
  let RegexPattern = /#[a-z]+.*/gi
  let Result = Sample.match(RegexPattern)
  console.log(Result)

/*
 This Regex will match a HASHTAG pattern which must begin with the (#) symbol, followed by one or more letters, numbers, or underscores. However, the first character after the # must be a letter.
 \g: to match the pattern across the whole string.
 \i: to match UPPERCASE & lowercase alphabetic.
 #[a-z]+: matches a Hastag symbol followed by a range of alpabetic from A to Z, (+) to match 1 or more of the preceding token.
 .* : matches zero or more charcter inside the Hashtag.
*/

  let Case1 = '##'
  let Test1 = RegexPattern.test(Case1)
  console.log(Test1)
//return false because the hashtag is followed by a hashtag tag not a letter.

  let Case2 = '#-No'
  let Test2 = RegexPattern.test(Case2)
  console.log(Test2)
//return false because the hashtag is followed by a random symbol.

  let Case3 = '#007'
  let Test3 = RegexPattern.test(Case3)
  console.log(Test3)
//return false because the hashtag is followe by a number, it can be a Hex color code.

