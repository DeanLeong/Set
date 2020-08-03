class Set {
  constructor(list = []) {
    this.values = [];
    this.length = this.values.length;
    list.forEach(a => this.insert(a));
  }
  
  insert(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
      this.length++
    }
  }
  remove(val) {
    if (this.values.includes(val)) {
      this.values.splice(this.values.indexOf(val), 1);
      this.length--
    }
  }
  has(val) {
    return this.values.includes(val);
  }
  union(set) {
    return new Set([...this.values, ...set.values]);
  }

  
  intersect(set) {
    return new Set(this.values.filter(x => set.has(x)));
  }
  difference(set) {
    let set1 = this.values.filter(x => !set.has(x));
    return new Set([...set1]);
  }

  symmetricalDifference(set) {
    let set1 = this.values.filter(x => !set.has(x));
    let set2 = set.values.filter(x => !this.has(x));
    return new Set([...set1, ...set2]);
  }
}

//let group = new Set();
// console.log("new Set initialized")
// console.log(group)

// group.insert("bob");
// console.log(group)
// group.insert("joe");
// group.insert("beth");
// console.log(group)
// let group2 = new Set();

// group2.insert("bob");
// group2.insert("joe");
// group2.insert("mary");
// console.log(group2)

// let group3 = group.union(group2);
// console.log(group3)

// group3.insert('mildred')
// console.log(group3)

// console.log(group3.difference(new Set(["bob", "joe", "amy"])))

// console.log(group.symmetricalDifference(group2))
