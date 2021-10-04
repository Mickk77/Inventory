$(document).ready(function(){
    $(".btnDelete").on('click', function(){
        $(this).closest("tr").remove();
    });
});
