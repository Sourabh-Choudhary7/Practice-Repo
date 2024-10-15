//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
// console.log("arr3: ", arr3)

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const slicedAnimals = animals.slice(2,4)
console.log("Slice :", slicedAnimals)
// console.log("Slice :", animals.slice(1,3))