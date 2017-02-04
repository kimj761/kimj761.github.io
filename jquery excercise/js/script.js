var clicked = false;

$("#pirate").remove();

$("body").addClass("gradient");

$("#toggle").click(function() {
    
    if (clicked == false) {
        console.log("you clicked it...");
        $("#status").html("Go");
        $("#status").css("background-color","green");
        $("#toggle").html("Stop");
        clicked = true; 
    } else {
        $("#status").html("Stop");
        $("#status").css("background-color","red");
        $("#toggle").html("Start");
        clicked = false; 
    }
    
})

$("#status").mouseenter(function() {
    console.log("you entered #status");
    $("#cat").show();
    if (clicked == true) {
        $("#cat").show();
    }
});

$("#status").mouseleave(function() {
    $("#cat").hide();
});