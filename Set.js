class Set {
  constructor() { 
    // Create a `values` property and set it equal to an empty array
    // Create a `length` property and set it equal to the length of the values property
    // Accept a `list` parameter (default to an empty array)
    // Loop through the `list` and insert each item into the set(use insert class method you will define later)
  }


  insert(value) {
    // if `value` is not in the `values` property, then push it in and increment the `length` property
  }

  remove(value) {
    // if `value` is in the `values` property, then remove it and decrement the `length` property
    
  }

  has(value) {
    // return true if `value` is in `values`, false if it isn't

  }

   //UNION
   // It returns a Set which consists of union of Set A and Set B
   // A Set is said to be a union of two set, if it contains all element of Set A as well as all elements of Set B, but it doesn't contains duplicate elements.
  union(set) {
    // return a new Set with the values from this Set and the Set passed in as a parameter
    // Hint: use spread operator to include values from both sets 
    //For example, 
    //set1 - { values: ['mike', 'angie', 'greg'] } 
    //set2 - { values: ['mike', 'angie', 'brian'] }
    // If we want to perform a union on these two sets we will do it like that: set3 = set1.union(set2) 
    // if you console.log your new Set(set3) it is supposed to look like that:
    // set3 = { values: ['mike', 'angie', 'greg', 'brian'] }
  }

  //INTERSECTION
  //It returns the intersection of Set A and Set B.
  // A Set is said to be the intersection of Set A and B if contains element which is present both in Set A and Set B.

  
  intersect(set) {
    // return a new Set of the values that appear in both this Set and the Set passed in
    // Hint: use .filter()
    //For example, 
    //set1 - { values: ['mike', 'angie', 'greg'] } 
    //set2 - { values: ['mike', 'angie', 'brian'] }
    // If we want to perform an interesections of these two sets, we will do it like that: 
    //set3 = set1.intersect(set2) 
    // if you console.log your new Set(set3) it is supposed to look like that:
    // set3 = { values: ['mike', 'angie'] }
  }

  //DIFFERENCE
  // It returns the Set which contains difference of Set A and Set B.
   // A Set is said to be a difference of Set A and B if it contains set of elements which are present in Set A but not in Set B.
  difference(set) {
    // return a new Set of the values that only appear in one of the two sets
    // Hint: use .filter()
    //For example, 
    //set1 - { values: ['mike', 'angie', 'greg'] } 
    //set2 - { values: ['mike', 'angie', 'brian'] }
    // If we want to find the difference between set1 and set 2 we will do it like that: set3 = set1.difference(set2) 
    // if you console.log your set3 it is supposed to look like that:
    // Set { values: ['greg'] }
  }

  
  symmetricalDifference(set) {
    // It should return all the elements of Set A that are not in Set B and vice-versa
    //For example, 
    //set1 - { values: ['mike', 'angie', 'greg'] } 
    //set2 - { values: ['mike', 'angie', 'brian'] }
    // set3 = set1.difference(set2) 
    // if you console.log your set3 it is supposed to look like that:
    // Set { values: ['greg','brian'] }
  }
}




module.exports = {
  Set
};
