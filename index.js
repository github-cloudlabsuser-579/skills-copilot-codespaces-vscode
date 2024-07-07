function reverseSentence(sentence) {
    // Reverse the sentence
    let reversedSentence = sentence.split('').reverse().join('');

    // Capitalize the first letter
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

const inputSentence = "Hello, world!";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);


const data = [
    [
        { name: 'John', age: 22 },
        { name: 'Jane', age: 25 }
    ],
    [
        { name: 'Bob', age: 30 }
    ]
];
// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flatMap(array => array.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']
