#!/usr/bin/node
// This Regex will extract URL adress such as: https://www.example.comLinks to an external site.
// https://subdomain.example.org/pageLinks to an external site..etc.

  let Sample = 'This is a test sample! filled with random strings like: ABCDEFGHIJKLMNOPQRSTUV >https//myweb.com https://mysite.io https://subdomain.example.org/pageLink https://www.example.com121314'
  let RegexPattern = /https:\/\/[a-z].+\.[a-z]{2,}/gi
  let Result = Sample.match(RegexPattern)
  console.log(Result)
/*
 This Regex will match URL pattern which must begin with https followed by a colon (:) and two forward slashes (//)
 then the domain name, which must begin with a letter.
 g: to match the pattern across the whole string.
 [a-z]\i: to match UPPERCASE & lowercase alphabetic.
 https:\/\/\.: matches the (https://adress.domain).
 {2,} : matches 2 or more alphabetic character in the domain.
*/

  let Case1 = 'https://123.mysite.com'
  let Test1 = RegexPattern.test(Case1)
  console.log(Test1)
//return false because the URL address must star with letters.

  let Case2 = 'https://myweb.c'
  let Test2 = RegexPattern.test(Case2)
  console.log(Test2)
//return false because the URL domain must at least finish with two letters.

  let Case3 = 'https:myweb.com'
  let Test3 = RegexPattern.test(Case3)
  console.log(Test3)
//return false because the (https:) must be followed by at two forword slaches(//).
