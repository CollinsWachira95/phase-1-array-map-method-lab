// index.js

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

function titleCased(tutorials = [ 'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]) {
  // This function takes an array of tutorial names (optional) as input.
  // It returns a new array with each tutorial name converted to title case.

  // If no input array is provided, return an empty array.
  if (!tutorials.length) {
    return [tutorials = [
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
    ]];
  }

  const titledTutorials = tutorials.map(tutorial => {
    // Convert each tutorial name to title case using regular expression or string manipulation.
    const words = tutorial.toLowerCase().split(' ');
    const titledWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return titledWords.join(' ');
  });

  return titledTutorials;
}

// Example usage:
const tutorialNames = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  // ... (more tutorials)
];

const titledNames = titleCased(tutorialNames);
console.log(titledNames);
