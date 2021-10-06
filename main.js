$(document).ready(function(){
    $(".btnDelete").on('click', function(){
        $(this).closest("tr").hide(1200);
    });
    $(".item").click(function(){
        $(this).css("color", "red");
    });
    $(".item").dblclick(function(){
        $(this).css("color", "blue");
    });
    $("p").click(function(){
        alert("If quantity is less: one click on item => text will be red. \nIf quantity is more: double click on item => text will be blue. \nIf quantity is correct: click on the button => the row will be hide.");
    });
    $("h1").hover(function(){
        $(this).css("color", "brown");
    });
});
