const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(tutorial => {
  return tutorial
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
})

console.log(titleCased)

/*
const titleCased = (array) => {
  array.map(string => string.trim().split(" "))

  return tutorials
}
console.log(titleCase)
*/

/*
function upperCase(array) {
  for (i = 0; i < array.length; i++){
  return array[i].toLowerCase().split(" ").map( word => {
    return word[0].toUpperCase() + word.substring(1)
  }).join (" ")
  }
}

console.log(upperCase(tutorials))
/*

//Below code only makes the first element an array with each word being its own element
/*
stringArray = function (array) {
  for (element of array) {
    return element.trim().split(" ")
  }
}  
*/

//Below code returns ['W']
/*
function capitalLetter(array){
  for (element of array) {
    return element.charAt(0).toUpperCase()
  }

}

console.log(stringArray(capitalLetter(tutorials)))
*/
