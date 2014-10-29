$(document).ready(function(){ 

//creating Address Book Class
  
function AddressBook(){
    
	var contactList = [];
   	
	this.addContact = function(contact){
		contactList.push(contact); 
	};
	
	this.deleteContact = function(cellnumber){ 

		for(i = 0; i < contactList.length; i++){
            		if(contactList[i]['cellNumber'] == cellnumber){
                		var index = i
            		}
        	}
		
		contactList.splice(index, 1);   
	};
	
	this.print = function(){
		console.log(contactList);	
	}; 
    
        this.Find = function(Needed){
        
	var answer = contactList.filter(function(x){

        for(var field in x){
    		
		    if(x[field] === Needed){
    	        return x[field];   
		    }  
	   }
       
        }); 
        
	return(answer);
    	};
};

// Creating Contact Class

function Contact(firstName, lastName, cellProvider, cellNumber){
    	this.firstName = firstName;
	this.lastName = lastName;
	this.cellProvider = cellProvider;
	this.cellNumber = cellNumber;
	};

// Allowing Contacts to inherit special printing format

Contact.prototype.toString = function(){
	return this.firstName + " "+ this.lastName + ": " + this.cellNumber;
} 

//Adding method to jQuery Validation Library to check that inputs are alphabetical letters  

jQuery.validator.addMethod("alpha", function(value, element) {
return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
},"Only Characters Allowed.");

//Creating a new instance of the Address Book class

var yellowPages = new AddressBook(); 

//Creating the validation rules of the jQuery Validation plugin

$("#MyForm").validate({
      rules: {
	firstname: {
		required:true, 
		alpha:true 
		}, 
	lastname: {
		required:true, 
		alpha:true 
		}, 

	cellprovider: {
		required:true, 
		alpha:true 
		}, 
	cellnumber: {
		required:true, 
		number:true
		}  	
      }
}); 

//Handling of the submitting of contact details in the html from

$("#MyForm").submit(function(){ 
	
	if($("#MyForm").valid() ){
 	
		var contact1 = new Contact($("#firstname").val(),$("#lastname").val(),$("#cellprovider").val(),$("#cellnumber").val());
		
		yellowPages.addContact(contact1);
	
		$("#numbers").append("<div class='AddedContacts'>"+contact1 +" "+ "<a href='#/"+ contact1.cellNumber + "' class='remove_field'>Delete</a>"+"</div>") 
	
		$("#searchBox").animate({height: "+=25px"},'fast'); 

		$("#container").animate({height: "+=25px"},'fast'); 

		$("#firstname").val(""); 
	
		$("#lastname").val("");  

		$("#cellprovider").val("");  

		$("#cellnumber").val(""); 
	
		return false;
	} 

	else{ 

	alert("Oops! One or more fields are incorrectly entered."); 

	}	
	
});  

//Handles the deleting of a contact from the address book

$('#numbers').on('click', '.remove_field',function(){

	$(this).parent('div').remove() 

	var id = $(this).attr("href"); 

	var id2 = (id.substring(2,id.length)); 

	alert("Contact has been deleted!") 

	yellowPages.deleteContact(id2); 

	$("#searchBox").animate({height: "-=25px"},'fast'); 

	$("#container").animate({height: "-=25px"},'fast'); 

	yellowPages.print(); 


	}); 

//Handles the search button of the address book

$("#RunSearch").click(function(){

	var FilteredList = yellowPages.Find($("#search").val()); 
	
	console.log(FilteredList);
	
	$("#numbers").hide(); 
	
	$("#numbers2").show(); 
	
	//$("#boundary").append("<div id='numbers2'> </div>")  

	//$("div#numbers").attr("id", "numbers2");
	//yellowPages.Find($("#search").val())
	

	for(i=0; i < FilteredList.length; i++){
	
		$("#numbers2").append(FilteredList[i]+ "<br>");	
	} 

});
  
//Handles the refresh button of the address book

$("#refresh").click(function(){
	
	$("#numbers2").empty();

	$("#numbers2").hide(); 

	$("#numbers").show();
	
}) 

});
