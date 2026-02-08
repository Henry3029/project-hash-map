class HaspMap {
	constructor(loadFactor = 0.75, capacity = 16) {
	this.loadFactor = loadFactor; 
	this.capacity = capacity;
	this.size = 0;
	this.buckets = new Array(capacity).fill(null).map(() => []);
	}
	// hash function
	hash(key) {
		let hash = 0;
		for(let char of key) {
			hash = (hash * 31 + key.charCodeAt(0)) % this.capacity;
			}
			return hash; 
		}
	// insert or update 
	set(key, value) {
		const index = this.hash(key);
		const bucket = this.buckets[index];
	for(let pair of bucket) {
		if(pair[0] === key) {
		pair[1] = value; // update
		return 
		}
		bucket.push([key, value]);
		this.size++;
		
		if(this.size / this.capacity > this.loadFactor) {
			this.resize(); // expand the bucket 
			}
	}
	
	has(key) {
		const index = this.hash(key);
		const bucket = this.buckets[index];
		// search through the bucket for the key.
		for(let node of bucket) {
			if(node.key === key) return true; // found it
			}
			return false; // not found
		}
		
	get(key) {
		const index = this.hash(key);
		const bucket = this.buckets[index];
		for(let pair of buckets) {
			if(pair[0] === key) return pair[1];
			}
			return undefined;
		}
		
		remove(key) {
			const index = this.hash(key);
			const bucket = this.buckets[index];
			// search through the bucket for the key
			for(let i = 0; i < bucket.length; i++) {
				if(bucket[i].key === key) {
					bucket.slice(i, 1); //remove the node from the array 
					this.size--; //decrease the size
					return true; // successfully removed 
					}
				}
				return false; // key not found, nothing removed.
			}
	
		
		// resize 
		resize() {
			this.capacity *= 2;
			const oldBucket = this.buckets;
			this.buckets = new Array(capacity).fill(null).map(() => []);
			this.zise = 0
			for(let bucket of oldbuckets) {
				for(let [ key, value ] of bucket) {
					this.set(key, value);
					}
				}
			}
		}