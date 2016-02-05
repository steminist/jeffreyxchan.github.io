$(document).ready(function(){
    var showing = true;
   $('#mission-statement').click(function(){
        if (showing == true){
         $('#mission-statement-content').hide();
            showing = false;
        }
        else {
            $('#mission-statement-content').show();
            showing=true;
        }   

   });
});