$("#contents").load("/pages/about.html");
loadPage("about");

$("#about").click(function() {
    loadPage("about");
});

$("#portfolio").click(function() {
    loadPage("portfolio");
});

$("#blog").click(function() {
    loadPage("blog");
});

$("#contact").click(function() {
    loadPage("contact");
});

function loadPage(page){
    $("#contents").load("/pages/"+page+".html");
    $(".nav li").each(function( index ) {
        $( this ).removeClass("active");
    });
    $("#"+page).addClass("active");
}