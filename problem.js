const deleteItemFromArr = (arr, targetItem) => {
  // code here
  const result = [];

  // * approach 3 using for in loop
  for (const address in arr) {
    if (arr[address] !== targetItem) {
      result.push(arr[address]);
      
    }
    
  }
  return result;
}

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
const item = 'hello';
console.log(deleteItemFromArr(currentArray, item)); //result = [1, 2, 3, 4, 5, 6, 8, 9, 10]
//! try to run this in your own terminal: node problem.js