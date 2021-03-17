#Some regular expression rules for JavaScript

#Typical regex format: 
/text/

#modifiers : 
/g: global
/m: multiline 
/i: case insinsitive
/y: sticky
/s: single line
/u: unicode

#Character sets 
------
[]in the character slot. for instance
/ninja/ would look for "ninja" in the text.
/[ng]inja/ would look for both "ninja" and "ginja"
We can also make something like: 
/[abcd1234]/ which would look for any of these characters in the character set, but doesn't need to have them together. 
----

[^p] means not p
----

#Ranges
[a-z] is all letters of the alphabet. We could also use [a-h] or [b-q] if we want to match with just the letters in those ranges. 
[A-Z] is uppercase
[a-zA-Z] is both upper and lower
[1-9] works for numbers as well. 
-------
Phone number format range: if the number is ###-###-#### (i.e., 10 numbers, we can do something like: 
/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/
----------
this can be a bit long-winded, so we can use the format []{x}. 
For instance, for numbers, we can say /[0-9]{10} which looks for a ten digit number. 
----------
You can do the same for any letter combo as well. 
/[a-z]{5}/ which looks for any five letter word, for instance. 
/[a-z]{5,8}/ looks for any five to eight letter word. 
/[a-z]{5,}/ looks for any number that is AT LEAST 5 characters long.

#Metacharacters
-\d match any digit character, same as [0-9]
-\w match any word character: a-z, A-Z, o-9 and _
-\s match whitespace character: spaces, tabs etc
-\t match tab character


