// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  // Declare variables using let to ensure block scoping
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Declare new variables scoped to this block
    let task = true;
    let task2 = false;
  }

  // Return the variables from the outer block scope
  return [task, task2];
}

