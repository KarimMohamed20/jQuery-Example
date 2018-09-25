$(document).ready(
// Main Paragraph Function
function(){
    // Toggle Paragraph 
    $("#toggle").click(
        function(){
            $("p").toggle();
            $("#color").toggle();
            $("#userColor").toggle();
        }
    );
    // Change Paragraph Color
    $("#color").click(
        function(){
            $("#p").css("color",document.getElementById("userColor").value);
        }
    );
    // Change Button Color When User Hover On it
    $("#color").mouseenter(
        function(){
            $("#color").css("padding","20px");
            $("#color").css("color","green");
            $("#color").css("font-weight","bold");
            $("#color").css("background-color",'white');
            $("#color").css("border-radius",'30px');

            
        }
    );
    $("#color").mouseleave(
        function(){
            $("#color").css("padding","10px");
            $("#color").css("color","black");
            $("#color").css("font-weight","");
            $("#color").css("border-radius",'');
            $("#color").css("background-color",'');

        }
    );
    
}

)