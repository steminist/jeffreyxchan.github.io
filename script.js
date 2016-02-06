var answer = prompt("Which famous computer scientist coined the term 'debugging'?")
while (answer != "Grace Hopper") {
    var answer = prompt("Which famous computer scientist coined the term 'debugging'?")
}

$(document).ready(function(){
    $(document).ready(function() {
       $("#impact-content").hide(); 
        $("#officers-content").hide();
        $("#involved-content").hide();
        $("#member-ot-month-content").hide();
    });
    
    $("#mission-statement").click(function() {
       $("#mission-statement-content").show();
        $("#impact-content").hide();
        $("#officers-content").hide();
        $("#involved-content").hide();
        $("#member-ot-month-content").hide();
    });
    
    $("#impact").click(function() {
        $("#mission-statement-content").hide();
        $("#impact-content").show();
        $("#officers-content").hide();
        $("#involved-content").hide();
        $("#member-ot-month-content").hide();
    });
    
    $("#officers").click(function() {
       $("#mission-statement-content").hide();
        $("#impact-content").hide();
        $("#officers-content").show();
        $("#involved-content").hide();
        $("#member-ot-month-content").hide();
    });
    
    $("#involved").click(function() {
        $("#mission-statement-content").hide();
        $("#impact-content").hide();
        $("#officers-content").hide();
        $("#involved-content").show();
        $("#member-ot-month-content").hide();
    });
    
    $("#member-ot-month").click(function() {
        $("#mission-statement-content").hide();
        $("#impact-content").hide();
        $("#officers-content").hide();
        $("#involved-content").hide();
        $("#member-ot-month-content").show();
    });
});
