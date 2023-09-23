// const targetObject = { id: 1, name: 'Bob' };

// const array1 = [
//   { id: 1, name: 'Bob' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// const isObjectInArray = array1.some(
//   (obj) => obj.id === targetObject.id && obj.name === targetObject.name
// );

// if (isObjectInArray) {
//   console.log('The object is in the array.');
// } else {
//   console.log('The object is not in the array.');
// }

const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const objectToRemove = { id: 2, name: 'Bob' };

const index = array.findIndex((item) => item.id === objectToRemove.id);

if (index !== -1) {
  array.splice(index, 1);
}

console.log(array);
