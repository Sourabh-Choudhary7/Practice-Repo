//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
// console.log("arr3: ", arr3)

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const slicedAnimals = animals.slice(2, 4)
// console.log("Slice :", slicedAnimals)
// console.log("Slice :", animals.slice(1,3))

// filter()
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'exhausted'];
const result1 = words.filter((word) => word.length >= 5)
const result = words.filter((word) => word.includes('ex')) // basically it can used in search functionality 
// console.log("Filtered result: ", result)

// find()
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 12 },
    { name: "cherries", quantity: 5 },
];
const found = inventory.find((item) => item.name === 'bananas')
// console.log("find: ", found)

// forEach()
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
array2.forEach((e) => {
    // console.log(e)
    // console.log(e*e)
})
const items = ["item1", "item2", "item3"];
const copyItems = [];
// The forEach() method executes a provided function once for each array element.
items.forEach((item) => {
    copyItems.push(item);
});
// console.log(copyItems)

// includes()
const array = [1, 2, 3];
// console.log(array.includes(2));

const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('at'));

// join()
const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// Expected output: "Fire,Air,Water"

// console.log(elements.join(' '));
// Expected output: "FireAirWater"

// console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// map()
const arr = [1, 4, 9, 16];

// Pass a function to map
const map1 = arr.map((x) => x * 2);
const root = arr.map((n) => Math.sqrt(n))

// console.log(map1);
// console.log(root);
// Expected output: Array [2, 8, 18, 32]

