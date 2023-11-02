# General pseudocode

1. Initialize an empty object or map to store numbers from the array as keys and their indices as values.
2. Loop through the given array.
     - For each number, calculate the complement (target - current number).
     - Check if the complement exists in the map.
         - If it exists, return an array containing the current index and the index found in the map.
     - If the complement does not exist in the map, store the current number and its index in the map.
3. If you have looped through the entire array and found no match, return an appropriate message or value to signify that no two numbers add up to the target.

# Brute force solution pseudocode

for i = 0 to nums.length - 1
    for j = i + 1 to nums.length
        if nums[j] equals to target - nums[i]
            return array of [i, j]
return error or null if no two sum solution

# Optomized solution pseudocode

Initialize a map or object 'numIndexMap'
for i = 0 to nums.length - 1
    Calculate 'complement' as target - nums[i]
    if numIndexMap has key 'complement'
        return array of [numIndexMap.get(complement), i]
    else
        Add nums[i] as key and i as value to numIndexMap
return error or null if no two sum solution
