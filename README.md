# Project Overview
This is a repository to practice Regular expression using the matching & Testing REGEX functions in JavaScript.

Here is the list of data types that have been extracted from different strings: 

- Credit card numbers (1234-5678-9101-1213)
- Currency amounts ($15.99)
- Hashtags (#Example)
- HTML tags (</html/>)
- URLs (https://www.example.com)

# Setup Instructions
- clone the repository
```

git clone https://github.com/hd77alu/alu_regex-data-extraction-hd77alu

```
- Navigate to the repository by using `cd alu_regex-data-extraction-hd77alu`
- Make sure you have nodejs installed `sudo apt install nodejs`
- **To extract Credit card numbers run**
```
node credit_card-regex.js
```
- **To extract Currency amounts run**
```
node currency-regex.js
```
- **To extract Hashtags run**
```
node hashtags-regex.js
```
- **To extract HTML tags run**
```
node html_tag-regex.js
```
- **To extract URLs run**
```
node url-regex.js
```
# Output Presentation
All of the outputs are correctly demonstrated with sample inputs and test cases in the files.
- for example if you run `node credit_card-regex.js` you will get -->:
```
Extracted Credit Cards Formats: 9000-1221-0021-2020,1234 5678 9012 3456
Test Case(1):(ABCD-EFGQ-LMNO-PQRS) is false because they are a group of letters not digits.
Test Case(2):(1234567890123456) is false because those are just random digits without any relationship.
Test Case(3):(1234-5678-9012-345) is false because the last digits group isn't complete.
Test Case(4):(1234:5678?9012_3456) is false because the digits aren't separated with (-) or whitespace.
```
# REGEX Methods
- (.match) A Function to extract the matching patterns from the string.
- (.test) A Function to test the edge cases & undesirable output.

# REGEX Flags
- \g: to match the pattern across the whole string.
- \i: to match UPPERCASE & lowercase alphabetic.

# REGEX Patterns Tokens
(\d):  matches any digit (0-9).

[ ]: to declare a matching range between different characters.

{ }: to declare that a specific number of times that a pattern must happen to be matched.

(.): to match any characters.

(*) matches zero or more of the preceding token.

(+): matches one or more of the preceding tokens.

(backword escape slash):  an escape character to match the expressions that are read as REGEX such as (., $ ...etc).
