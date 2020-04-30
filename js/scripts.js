$(document).ready(function(){
    $( "#results" ).click(function() {
    option.selections();
  });  
});


var option = new Options()




function Options(option1,option2,option3,option4, option5){
     this.option1 = option1;
     this.option2 = option2;
     this.option3 = option3;
     this.option4 = option4;
     this.option5 = option5;
    }
    
    

    
     

    Options.prototype.selections= function(){
    this.option1 = parseInt($("#beverage").val())
    this.option2 = parseInt($("#movie").val())
    this.option3 = parseInt($("#animal").val())
    this.option4 = parseInt($("#color").val())
    this.option5 = parseInt($("#music").val())     
    
    if (this.option1 === 1 && this.option2 === 1 && this.option3 === 1 && this.option4 === 1 && this.option5 ===1){
    console.log("hi")
}


    }








