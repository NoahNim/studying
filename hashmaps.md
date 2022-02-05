Hashmaps

A hashmap is a datastructure used to store data. It is composed to two components, a key and a value.

Hashmaps use a hash function to determine where to store the value. The hash function takes a key and creates a hash code, which determines where to store the value. This means that identical keys will always point to the same value, so you must make sure you don't use a key that already exists.

Hashmaps use two main methods two store and retrieve data: put and get.

A hash table can be thought of as an array coupled with a function called the hash function. The hash function takes the key as input and outputs an integer called a hash value that maps the key to an index in the hash table. You initially use a hash function to store a given key. Later you used the hash function to determine where in the hash table to search for a given key. For this reason, it's crucial that a hash function behaves consistently and outputs the sane hash value for identical keys.

Hash tables can be used to store data of all types.

Example of a hash function for strings:

int hash_function(char*key) {
    int hash = topper(key[0]) - 'A';
    return hash % SIZE;
}

hashFunction(key){
    const hash = topper(key[0]) - 'A';
    return hash % Student.length;
}

This hash function creates a hash value based on the first letter of the key. The problem is it has a collision, if a value of a key is the same of something already indexed. 

With linear probing, it can be assigned the next available slot in the table. Linear probing causes clustering, where it can cause a lot of collisions because of how the indexing is done. The time complexity also becomes O(n) since the next available slot could be the final slot in the table.

With separate chaining the hash table is actually an array of pointers to linked lists. When a collision occurs, the key can be inserted in constant time to the head of a linked list. This can be in O(n/k) which is better than O(n).

A good hash function:
- Should make use of all info provided by key.
- Uniformly (evenly) distributes across the hash table.
- Maps similar keys to very different hash values.
- Use only fast operations.
