var contentArray = [];
var ioChat = [
                {image: "img/projects/io_chat/chat.png", text: "Chat Screen"},
                {image: "img/projects/io_chat/About_me_pd.png", text: "About me"},
                {image: "img/projects/io_chat/Contacts.png", text: "Contacts"},
                {image: "img/projects/io_chat/Voice_Call.png", text: "Voice Call when chatting with others"},
                {image: "img/projects/io_chat/Video_call.png", text: "Video Call when chatting with others"},
                {image: "img/projects/io_chat/Room_Video_Call_full_screen.png", text: "Group video call"},
                {image: "img/projects/io_chat/My_photos.png", text: "Photo gallary"},
                {image: "img/projects/io_chat/Settings.png", text: "App Settings"}
            ]


$(".modal-body-content").height($("#detailsViewModal").height()-120);

$(".details-btn").on("click", function(){
    var appTitle = $(this).closest(".parent-div").find(".app-title").text();   
    $("#detailsViewModal").find("#app-title").text(appTitle);
    
    if(appTitle == "IO Chat"){
        contentArray = ioChat; 
    }else{
        contentArray = []; 
    }
    
    if(contentArray.length){
        var content;
        for(var i = 0; i < contentArray.length; i++){
            content= '<div class="row">'
                    +    '<div class="col-sm-8 col-sm-offset-2">'
                    +        '<div class="row work-item-row">'
                    +            '<div class="col-lg-12">'
                    +                '<img style="box-shadow: 2px 2px 5px rgba(0,0,0,0.2);" src="'+contentArray[i].image+'" class="img-responsive center-block modal-content-img">'
                    +            '</div>'
                    +        '</div>'
                    +        '<div class="row text-center" style="margin: 15px 10px 50px 10px">'
                    +            '<div class="col-xs-12">'
                    +               '<p class="modal-img-text">'+contentArray[i].text+'</p>'
                    +            '</div>'
                    +        '</div>'
                    +    '</div>'
                    +'</div>';
            $(".modal-body-content").append(content);
        }
        
    }
    
})

$(".close-btn").on("click", function(){
    $(".modal-body-content").html("");
});
    