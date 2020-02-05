// check off specific todos by clicking
$("li").click(function() {
    if($(this).css("color") ==="rgb(255, 0, 0)") {
        $(this).css({
            color: "black",
            textDecoration: "none" 
        });
    }
    else {
        $(this).css({
            color: "red",
            textDecoration: "line-through" 
        });
    }
});