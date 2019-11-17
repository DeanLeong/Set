![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Sets 

A set is a collection of unique elements. The elements of a set are called *members*. The two most important properties of a set are: 
   1. Unordered members
   2. No member can occur more than once.

Sets are not considered a separate data structure in many programming languages, however Sets can be useful when we want to creare a data structure that consists only of unique elements, such as list of a unique words in text.

Mathematically a Set is denoted as a list of members, surrounded by curly braces, such as `{0,1,2,3,4}`. We can write set in any order, so the previous set can be written as `{4,3,2,1,0}` or `{3,0,1,2,4}` or any other combination of the members such that **all the members are written just once.**

 * A set containing no members is called an **empty set**
 * Two sets are considered equal if they contain exactly the same members.
 * A set is considered subset of another set if all the members of the first set are contained in the second set.


### Set Operations 

Fundamental operations performed on sets are:

1. **Union**
  A new set is obtained by combining the members of one set with the memebers of another set, no duplicates.

  ```
  set1
  Set { values: [ 'mike', 'angie', 'greg' ], length: 3 }

  set2
  Set { values: [ 'mike', 'angie', 'brian' ], length: 3 }

  unionSet
  Set { values: [ 'mike', 'angie', 'greg', 'brian' ], length: 4 }
  ```
  
2. **Intersection**
  A new set is obtained by adding all the members of one set that also exist in a second set.

  ```
  set1
  Set { values: [ 'mike', 'angie', 'greg' ], length: 3 }

  set2
  Set { values: [ 'mike', 'angie', 'brian' ], length: 3 }

  intersectionSet
  Set { values: [ 'mike', 'angie' ], length: 2 }
  ```

3. **Difference**
  A new set is obtained by adding all the members of one set except those that also exist in a second set.
  A Set is said to be a difference of Set A and B if it contains set of elements which are present in Set A but not in Set B.
  ```
  set1
  Set { values: [ 'mike', 'angie', 'greg' ], length: 3 }

  set2
  Set { values: [ 'mike', 'angie', 'brian' ], length: 3 }

  differenceSet
  Set { values: [ 'greg' ], length: 1 }
  ```

# Sets Exercise

Complete the exercise defined in `Set.js` according to the specifications in the comments. In addition to implementing the structure, you'll also get to try out a few set methods!

## Setup: 
1. Fork and clone this repo.
2. `npm i`
3. `npm test` to test your code.


