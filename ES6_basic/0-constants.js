// 0-constants.js

// Function to use const for instantiating variables
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function to use let for instantiating variables
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

// Helper function to be used in taskNext
export function getLast() {
  return ' is okay';
}

