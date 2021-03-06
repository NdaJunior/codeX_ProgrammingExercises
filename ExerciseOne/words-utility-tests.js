
var theWords = "A Unit Test is a piece of code that is using your code, exercising some scenarios that it expects to work in a certain way. Unit tests are isolated from external dependencies unlike integration tests. We will focus on Unit Tests.";

QUnit.test( "test if words are counted correctly", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.countWords(), 41);
});

QUnit.test( "find the longest word", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.longestWord(), "dependencies");
});

QUnit.test( "the average word length of words supplied", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.averageWordLength(), 4.609756097560975);
});

QUnit.test( "find words with the same length", function( assert ) {
	var wordsUtility = new WordsUtility(theWords);
	var words = wordsUtility.wordsWithTheSameLength(); 
	assert.deepEqual(words,[ "Unit","Test","code","that","your","some","that","work","way.","Unit","from","will","Unit" ])
});


QUnit.test( "no words with the same length return nothing", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);

  	assert.equal(9, wordsUtility.noWordsWithTheSameLength().length);

});

QUnit.test( "find the shortest word", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.shortestWord(), "A");
});

QUnit.test( "The letter which the most words start with", function( assert ){
	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.popularLetterStarts(),"t")
}); 

QUnit.test( "The letter which the most words end with", function( assert ){
	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.popularLetterEnds(),"s")
}); 




QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};

//create a test for What letter does the most words start with 


//create a test for What letter does the most words end with
 
