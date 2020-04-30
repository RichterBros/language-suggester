$(document).ready(function(){
       
   
      
$("#beverage").change(function() {
      
    var option = new Options(parseInt($("#beverage").val()), $("#movie").val()) 
    
    option.selections();
});

$("#movie").change(function() {

     

option.selections();


});
            
            
    





});







function Options(option1,option2,option3,option4){
     this.option1 = option1;
     this.option2 = option2;
     this.option3 = option3;
     this.option4 = option4;
    }
    
    

    
     

    Options.prototype.selections= function(){
if (this.option1 === 1){
    console.log("hi")
}


    }


//(parseInt(this.side1)

//     var triangle = new Triangle($("#side1").val(),$("#side2").val(), $("#side3").val() );

//     triangle.isosceles()
//     triangle.equilateral()
//     triangle.scalene()
//     triangle.notATriangle()
    
    
//     });
      
//     });
    
    
    
//     function Triangle(side1,side2,side3){
//       this.side1 = side1;
//       this.side2 = side2;
//       this.side3 = side3;
//     }
    
    
    
    
//     Triangle.prototype.isosceles = function(){
//       if(this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3){
//         $("#output").show();
//         $("#output").text("Isosceles!")
     
//      }
//     }








