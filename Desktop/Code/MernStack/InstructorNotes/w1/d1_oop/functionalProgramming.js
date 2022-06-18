const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ["The", "immortal", "words", "hello", "world"];
const students = [
  {
    name: "Matathew",
    isLate: false,
    priorExperience: false,
    address: { state: "CA", city: "Orange" },
  },
  {
    name: "Garrett",
    isLate: true,
    priorExperience: true,
    address: { state: "WA", city: "Seattle" },
  },
  {
    name: "Kyle",
    isLate: false,
    priorExperience: true,
    address: { state: "CA", city: "Santa Monica" },
  },
  {
    name: "Cody",
    isLate: true,
    priorExperience: false,
    address: { state: "WA", city: "Tacoma" },
  },
];

function isEven(num) {
  return num % 2 === 0;
}

function getEvenNums(nums) {
  const evenNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      evenNums.push(nums[i]);
    }
  }

  return evenNums;
}

let evenNums = getEvenNums(numbers);

evenNums = numbers.filter(isEven);

evenNums = numbers.filter(function (n) {
  return n % 2 === 0;
});

// console.log(evenNums);

const oddNumsDivisbleBy3 = numbers.filter(function (n) {
  if (n % 2 !== 0 && n % 3 === 0) {
    return true;
  }
  return false;
});

// console.log(oddNumsDivisbleBy3);

Array.prototype.where = function (callbackFunc) {
  const filteredItems = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const shouldKeep = callbackFunc(item, i, this);

    if (shouldKeep) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
};

evenNums = numbers.where(isEven);

const fiveCharWords = words.where(function (word) {
  return word.length === 5;
});

let lateStudents = students.filter(function (student) {
  return student.isLate;
});

// console.log(lateStudents);

let californianStudents = students.filter(function (student) {
  return student.address.state === "CA";
});

// console.log(californianStudents);

lateStudents = students.filter((student) => student.isLate);
console.log(lateStudents);

californianStudents = students.filter(
  (student) => student.address.state === "CA"
);

console.log(californianStudents);
