

$(document).ready(function(){

    $('#formabc').validate({
    
        rules:{
            firstname:"required",
            lastname:"required",
            fathername:"required",
            cnic:"required",
        },
            
    
    
    });
    
    $('#formabc2').validate({
    
        rules:{
            firstname:"required",
            lastname:"required",
            fathername:"required",
            cnic:"required",
        },
            
    
    
    });

    $('#formabc3').validate({
    
        rules:{
            firstname:"required",
            lastname:"required",
            fathername:"required",
            cnic:"required",
        },
            
    
    
    });
    
    });
$(document).ready(function(){
    $("#abc").hide()
    $("#abc1").hide()
    $("#abc2").hide()
    $("#abc9").hide()
    $("#formabc2").hide()
    $("#formabc3").hide()
  $("#abc3").click(function(){

    $("#abc").show();
    $("#formabc").hide()
    $("#formabc2").show()


  })
  $("#abc4").click(function(){
    $("#abc").hide()
    $("#abc1").show()
    $("#formabc").hide()
    $("#formabc2").hide()
    $("#formabc3").show()

  })
  $("#abc5").click(function(){
    $("#abc").hide()
    $("#abc1").hide()
    $("#abc2").show()
    $("#formabc").hide()
    $("#formabc2").hide()
    $("#formabc3").show()

  })
$("#abc10").click(function(){
  $("#abc9").slideDown()
  $("#abc9").show()

})


});




