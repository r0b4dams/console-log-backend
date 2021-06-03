// simple test file to calculate average rating
const ratings = [5,3,4,2,2,2];

// get total sum of all ratings
let sum = 0;
ratings.forEach(rating => {sum += rating});

// then divide by number fo elements
const avg = sum / ratings.length;

console.log(avg);