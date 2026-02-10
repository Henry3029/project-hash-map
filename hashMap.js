class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
	this.loadFactor = loadFactor; 
	this.capacity = capacity;
	this.size = 0;
	this.buckets = new Array(capacity).fill(null).map(() => []);
	}
	// hash function
	hash(key) {
  let hash = 0;
  for(let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) % this.capacity;  // ✅ Use index i
  }
  return hash; 
}
	// insert or update 
	set(key, value) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  for(let pair of bucket) {
    if(pair[0] === key) {
      pair[1] = value;
      return;
    }
  }
  // ✅ Only add if key wasn't found
  bucket.push([key, value]);
  this.size++;
  
  if(this.size / this.capacity > this.loadFactor) {
    this.resize();
  }
}
	
   has(key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  for(let pair of bucket) {
    if(pair[0] === key) return true;  // ✅ Use pair[0] for key
  }
  return false;
}
		
		length() {
			return this.size;
			}
		
	get(key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  for(let pair of bucket) {  // ✅ Use 'bucket'
    if(pair[0] === key) return pair[1];
  }
  return undefined;
}
		
		keys() {
  const keysArray = [];
  for(let bucket of this.buckets) {
    for(let pair of bucket) {
      keysArray.push(pair[0]);  // ✅ Use pair[0]
    }
  }
  return keysArray; 
}

values() {
  const valuesArray = [];
  for(let bucket of this.buckets) {
    for(let pair of bucket) {
      valuesArray.push(pair[1]);  // ✅ Use pair[1]
    }
  }
  return valuesArray; 
}

entries() {
  const entriesArray = [];
  for(let bucket of this.buckets) {
    for(let pair of bucket) {
      entriesArray.push([pair[0], pair[1]]);  // ✅ Or just: entriesArray.push(pair)
    }
  }
  return entriesArray; 
}
	
		
		clear() {
  this.buckets = new Array(capacity).fill(null).map(() => []);  // ❌ 'capacity' undefined
  this.size;  // ❌ Doesn't set to 0
}

remove(key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  for(let i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === key) {  // ✅ Use bucket[i][0] for key
      bucket.splice(i, 1);  // ✅ Use splice to modify
      this.size--;
      return true;
    }
  }
  return false;
}
	
		
		// resize 
	        resize() {
  this.capacity *= 2;
  const oldBuckets = this.buckets;
  this.buckets = new Array(this.capacity).fill(null).map(() => []);
  this.size = 0;
  for(let bucket of oldBuckets) {
    for(let [key, value] of bucket) {
      this.set(key, value);
    }
  }
}
		}
	
	const hashMap = new HashMap();
	hashMap.set('Carlos', 'Developer');
hashMap.set('Maria', 'Designer');
hashMap.set('John', 'Manager');

console.log(hashMap.get('Carlos'));  // 'Developer'
console.log(hashMap.get('Maria'));   // 'Designer'
// Test has
console.log(hashMap.has('Carlos'));  // true
console.log(hashMap.has('Bob'));     // false

// Test length
console.log(hashMap.length());       // 3
// Test keys
console.log(hashMap.keys());         // ['Carlos', 'Maria', 'John']

// Test values
console.log(hashMap.values());       // ['Developer', 'Designer', 'Manager']

// Test entries
console.log(hashMap.entries());      // [['Carlos', 'Developer'], ...]

console.log(hashMap.remove('Maria'));  // true
console.log(hashMap.length());         // 2
console.log(hashMap.has('Maria'));     // false
// Test update
hashMap.set('Carlos', 'Senior Developer');
console.log(hashMap.get('Carlos'));    // 'Senior Developer'
// Test clear
hashMap.clear();
console.log(hashMap.length());         // 0
console.log(hashMap.keys());           // []