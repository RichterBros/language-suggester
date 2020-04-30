$(document).ready(function(){
       
   
      
$("#beverage").change(function() {
      
    
    
    option.selections();
});

$("#movie").change(function() {

     

option.selections();


});
            
            
    





});


var option = new Options()




function Options(option1,option2,option3,option4){
     this.option1 = option1;
     this.option2 = option2;
     this.option3 = option3;
     this.option4 = option4;
    }
    
    

    
     

    Options.prototype.selections= function(){
    this.option1 = parseInt($("#beverage").val())
    this.option2 = parseInt($("movie").val())
        
    
    if (this.option1 === 1){
    console.log("hi")
}


    }








