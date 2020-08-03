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

let group = new Set();

group.insert("mike");
group.insert("angie");
group.insert("greg");
console.log(group)
let group2 = new Set();

group2.insert("mike");
group2.insert("angie");
group2.insert("brian");
console.log(group2)
let group3 = group.union(group2);
console.log(group3)
