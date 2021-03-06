var numbers = [1,4,23,7,44,867,44,4663,3, 5, 7, 11, 13,23,88,45,234,77,56,88,56,9,6,4,2,3,67, 71, 73, 79, 83, 89, 97,776,4,500,6448,20,22545,9951,3345];

QUnit.test("Find the largest number",function(assert){ 
	var numbersTest = new NumbersTest(numbers);
	assert.equal(numbersTest.findLargestNumber(),22545);
});

QUnit.test("Find the smallest number", function(assert){
	var numbersTest = new NumbersTest(numbers);
	assert.equal(numbersTest.findSmallestNumber(),1);
}); 

QUnit.test("Find average of all numbers",function(assert){
	var numbersTest = new NumbersTest(numbers);
	assert.equal(numbersTest.findAverage(),1232.4634146341464)
});

QUnit.test("Find all the even numbers", function(assert){
	var numbersTest =new NumbersTest(numbers);
	assert.deepEqual(numbersTest.findEven(),[ 6448, 776, 500, 234, 88, 88, 56, 56, 44, 44, 20, 6, 4, 4, 4, 2 ])
}); 

QUnit.test("Find all the odd numbers", function(assert){
	var numbersTest =new NumbersTest(numbers);
	assert.deepEqual(numbersTest.findOdd(),[ 22545, 9951, 4663, 3345, 867, 97, 89, 83, 79, 77, 73, 71, 67, 45, 23, 23, 13, 11, 9, 7, 7, 5, 3, 3, 1 ])
}); 

QUnit.test("Find all prime numbers",function(assert){ 
	var numbersTest = new NumbersTest(numbers);
	assert.deepEqual(numbersTest.findPrime(),[ 1, 3, 3, 5, 7, 7, 11, 13, 23, 23, 67, 71, 73, 79, 83, 89, 97, 4663 ]);
});


