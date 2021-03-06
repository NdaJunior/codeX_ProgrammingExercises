
WordsUtility = function(words){

	this.countWords = function(){
			return theWords.split(" ").length;
			}; 
	
	this.longestWord = function(){

			listOfWords = theWords.split(" ");  
  
			listOfWords.sort(function(a,b){return b.length - a.length});        
 		 
			return listOfWords[0]   
			
			};

	this.averageWordLength = function(){
			var totalLength = 0
			var listOfWords = theWords.split(" ");
			for(x in listOfWords){
    				totalLength += listOfWords[x].length;
					}		
			return ((totalLength)/listOfWords.length);
		
			};

	this.shortestWord = function(){

			var listOfWords = theWords.split(" ");
			listOfWords.sort(function(a,b){return a.length - b.length});
			return listOfWords[0];
			};

	this.wordsWithTheSameLength = function(){
		
			listOfWords = theWords.split(" "); 
		
			var dictionaryOfWords = {}; 
			for(i = 0; i < listOfWords.length; i++){
        			dictionaryOfWords[listOfWords[i].length] = [];
			} 
		

			for(x in dictionaryOfWords){
        			for(y in listOfWords){
        				if(listOfWords[y].length == x){
            					dictionaryOfWords[x].push(listOfWords[y]);
        				};
    				};
			} ; 

			var counter = 0; 
			var wordsWithSameLength = undefined;
			
			for(x in dictionaryOfWords){
					if(dictionaryOfWords[x].length > counter){
						var counter = dictionaryOfWords[x].length;
						var wordsWithSameLength = dictionaryOfWords[x]
					}							
				}

 		
			return (wordsWithSameLength); 
		
		
		
		
		
		
			}; 

	this.noWordsWithTheSameLength = function(){
			
		/*	listOfWords = theWords.split(" ");
			var wordLengths = [];
			for(x in listOfWords){
				wordLengths.pop(listOfWords[x].length);				
			} 
			for (x in listOfWords){
				for (y in wordLengths){
					if(listOfWords[x].length != wordLengths[y]){
						return "nothing"						
						}					
					}
				} */ 
			return "Ndabenhle"
				
			}; 

	this.popularLetterStarts = function(){

			var listOfWords = theWords.split(" ");
			
			listOfWords.sort(function(a,b){return a.length - b.length}); 			
			
			listOfWordStarts = []; 

			dictionaryLetters = {};
			
			for(x in listOfWords){
			listOfWordStarts.push(listOfWords[x][0].toLowerCase())		
			}			
						
			for(i = 0; i < listOfWords.length; i ++){
				
				dictionaryLetters[(listOfWords[i][0].toLowerCase())] = [];

				}; 
			for(x in listOfWordStarts){
				for(y in dictionaryLetters){
					if(listOfWordStarts[x] == y){
						dictionaryLetters[y].push(listOfWordStarts[x])
					}
				}
			} 

			var counter = 0; 
			var mostUsedLetter = " "
			
			for(x in dictionaryLetters){
					if(dictionaryLetters[x].length > counter){
						var counter = dictionaryLetters[x].length;
						var mostUsedLetter = x
					}							
				}
			 
	
			 
			
			
			//console.log(listOfWordStarts); 
			
			return(mostUsedLetter); 
			
			
			

			}; 

	this.popularLetterEnds = function(){ 

			var listOfWords = theWords.split(" ");
			
			listOfWords.sort(function(a,b){return a.length - b.length}); 

			listOfWordEnds = []; 

			dictionaryLetters = {}; 

			for(x in listOfWords){
			listOfWordEnds.push(listOfWords[x][listOfWords[x].length - 1].toLowerCase())		
			} 

						
			for(i = 0; i < listOfWords.length; i ++){
				
				dictionaryLetters[(listOfWordEnds[i][0].toLowerCase())] = [];

				}; 
			for(x in listOfWordEnds){
				for(y in dictionaryLetters){
					if(listOfWordEnds[x] == y){
						dictionaryLetters[y].push(listOfWordEnds[x])
					}
				}
			}; 

			var counter = 0; 
			var mostUsedLetterEnd = undefined;
			
			for(x in dictionaryLetters){
					if(dictionaryLetters[x].length > counter){
						var counter = dictionaryLetters[x].length;
						var mostUsedLetterEnd = x
					}							
				} 

			return(mostUsedLetterEnd);

			
			



			};  


	 
	
};
