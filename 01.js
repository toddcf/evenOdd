/*
test cases: 0 returns true, 3 returns false, 6 returns true
question: make a function that tells whether a number is even or not
bonus: make the code inside the function one line and do not use an if statement
bonus: don't use % (modulus)
level:
time: 10 minutes
*/

alert("Link is working!");

// BOOLEAN VERSION:

var isOdd = function(x) {
	return x & 1;
};

var isEven = function(x) {
	return !( x & 1 );
};

console.log(isOdd(5));
console.log(isOdd(4));
console.log(isEven(5));
console.log(isEven(4));

// STRING VERSION:

var evenOdd = function(x) {
	return (x & 1) ? "odd" : "even";
}

console.log(evenOdd(5));
console.log(evenOdd(4));