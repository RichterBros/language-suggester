$(document).ready(function(){
    $("#submit").click(function() {
    option.selections();
  });  
});

function Options(option1,option2,option3,option4, option5){
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.option5 = option5;
}
    
var option = new Options()
    
Options.prototype.selections= function(){
  this.option1 = parseInt($("#beverage").val())
  this.option2 = parseInt($("#movie").val())
  this.option3 = parseInt($("#animal").val())
  this.option4 = parseInt($("#color").val())
  this.option5 = parseInt($("#music").val())     
    
if (this.option1 + this.option2 + this.option3 + this.option4 + this.option5 <= 5){
  $("#results").text("your language is C#")
  }else if (this.option1 + this.option2 + this.option3 + this.option4 + this.option5 > 5 &&  this.option1 + this.option2 + this.option3 + this.option4 + this.option5 <= 10){
    $("#results").text("your language is JavaScript")
  }else if (this.option1 + this.option2 + this.option3 + this.option4 + this.option5 > 10 &&  this.option1 + this.option2 + this.option3 + this.option4 + this.option5 <= 15){
    $("#results").text("your language is Python")
  }else if (this.option1 + this.option2 + this.option3 + this.option4 + this.option5 > 15 &&  this.option1 + this.option2 + this.option3 + this.option4 + this.option5 <= 20){
    $("#results").text("your language is Ruby")
  }else{
    $("#results").text("please choose one of each option")
  }
}