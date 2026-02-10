# HashMap Implementation

A custom HashMap (Hash Table) data structure implemented in JavaScript.

## Description

This project implements a hash map from scratch using arrays and linked lists (collision handling via chaining). It demonstrates core data structure concepts including hashing, collision resolution, and dynamic resizing.

## Features

- **Dynamic resizing**: Automatically doubles capacity when load factor exceeds 0.75
- **Collision handling**: Uses chaining (arrays) to handle hash collisions
- **Complete API**: Includes all standard hash map operations

## Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `set(key, value)` | Add or update a key-value pair | void |
| `get(key)` | Retrieve value for a given key | value or undefined |
| `has(key)` | Check if key exists | boolean |
| `remove(key)` | Delete a key-value pair | boolean |
| `length()` | Get number of stored keys | number |
| `clear()` | Remove all entries | void |
| `keys()` | Get array of all keys | array |
| `values()` | Get array of all values | array |
| `entries()` | Get array of [key, value] pairs | array |

## Usage
```javascript
const hashMap = new HashMap();

// Add entries
hashMap.set('Carlos', 'Developer');
hashMap.set('Maria', 'Designer');
hashMap.set('John', 'Manager');

// Retrieve values
console.log(hashMap.get('Carlos'));  // 'Developer'

// Check existence
console.log(hashMap.has('Maria'));   // true

// Get all keys
console.log(hashMap.keys());         // ['Carlos', 'Maria', 'John']

// Update value
hashMap.set('Carlos', 'Senior Developer');

// Remove entry
hashMap.remove('John');

// Get count
console.log(hashMap.length());       // 2

// Clear all
hashMap.clear();
```

## How It Works

1. **Hashing**: Keys are converted to array indices using a hash function
2. **Collisions**: Multiple keys can hash to the same index (stored as array of pairs)
3. **Load Factor**: When entries/capacity > 0.75, the hash map doubles in size and rehashes all entries

## Configuration
```javascript
// Default: load factor 0.75, initial capacity 16
const hashMap = new HashMap();

// Custom configuration
const customMap = new HashMap(0.8, 32);
```

## Time Complexity

| Operation | Average | Worst Case |
|-----------|---------|------------|
| set | O(1) | O(n) |
| get | O(1) | O(n) |
| has | O(1) | O(n) |
| remove | O(1) | O(n) |

*Worst case occurs when all keys hash to the same bucket*

## Author

Henry Goodluck Chigozie

## License

MIT