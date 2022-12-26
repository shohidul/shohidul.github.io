loadPage("about");
// loadPage("portfolio");

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

function loadPage(page) {
    $("#contents").fadeOut(0).load("/pages/" + page + ".html").fadeIn("slow");
    $(".nav li").each(function (index) {
        $(this).removeClass("active");
    });
    $("#" + page).addClass("active");
    setTimeout(
        function () {
            parseMarkdown();
        }, 150);
}

function parseMarkdown() {
    var target = $("body").find(".marked");
    target.each(function (index) {
        console.log($(this).text());
        var html = marked.parse($(this).text())
        $(this).html(html);
    });
}