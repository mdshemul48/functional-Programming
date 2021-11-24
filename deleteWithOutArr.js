const currentArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'hello',
  'f',
  'g',
  'h',
  'i',
  'j',
];

const i = 5;
const value = 'ME'; //replace hello with ME

const deleteItemFromArr = (arr, itemIndex) => {
  // return arr.filter((_,index) => index !== itemIndex)

  for (let i = itemIndex; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();
  return arr;
};

// arr 1 , 2 , 3
// 1. looping through the array
// 2. look for the provided index if exits in the array
// 3. if provided index exists in the array

console.log(deleteItemFromArr(currentArray, i));
