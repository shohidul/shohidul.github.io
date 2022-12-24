var contentArray = [];
var bbq = [
                {image: "img/projects/bbq/home.png", text: "Home Page"},
                {image: "img/projects/bbq/outlets.png", text: "All outlets or Tenants"},
                {image: "img/projects/bbq/outlet_view1.png", text: "Outlet View."},
                {image: "img/projects/bbq/menu1.png", text: "Food Menu Combo"},
                {image: "img/projects/bbq/menu2.png", text: "Food Menu Drinks"},
                {image: "img/projects/bbq/checkout.png", text: "Checkout Page"},
                {image: "img/projects/bbq/orders.png", text: "All Orders"},
                {image: "img/projects/bbq/outlet_edit.png", text: "Outlet Edit"},
                {image: "img/projects/bbq/category_edit.png", text: "Category Edit"},
                {image: "img/projects/bbq/login.png", text: "User or Outlet Signup & Login"},
                {image: "img/projects/bbq/bottom.png", text: "Page Footer"}
            ]
var ioChat = [
                {image: "img/projects/io_chat/chat.png", text: "Chatting with a specific user."},
                {image: "img/projects/io_chat/About_me_pd.png", text: "About me is the current user information view and update screen."},
                {image: "img/projects/io_chat/Contacts.png", text: "Shows Contacts of the current account."},
                {image: "img/projects/io_chat/Voice_Call.png", text: "Voice Call when chatting with others."},
                {image: "img/projects/io_chat/Video_Call.png", text: "Video Call when chatting with others."},
                {image: "img/projects/io_chat/Room_Video_Call_full_screen.png", text: "Group video call in full-screen mode."},
                {image: "img/projects/io_chat/My_photos.png", text: "A gallery of photos that a user has been shared."},
                {image: "img/projects/io_chat/Settings.png", text: "App settings screen. More settings need to add."}
            ]
var gms = [
                {image: "img/projects/gms/1.JPG", text: "Log In screen."},
                {image: "img/projects/gms/2.png", text: "Home screen with Gym Members attendance list."},
                {image: "img/projects/gms/3.JPG", text: "Member's profile creation form"},
                {image: "img/projects/gms/4.png", text: "Here Trainers can create  meal plans from their user accounts."},
                {image: "img/projects/gms/5.JPG", text: "Trainers can create exercise routines also."},
                {image: "img/projects/gms/6.JPG", text: "If Gym has any product to sell they can register the product here."},
                {image: "img/projects/gms/7.JPG", text: "Product table view."},
                {image: "img/projects/gms/8.JPG", text: "Instruments registration form."},
                {image: "img/projects/gms/9.JPG", text: "Revenue and expenses register in Accounts section."},
                {image: "img/projects/gms/10.JPG", text: "It is the revenue form and its table view."},
                {image: "img/projects/gms/11.JPG", text: "Software settings screen."},
                {image: "img/projects/gms/12.JPG", text: "Company information can be changed from here. Color theme is also changeable."},
                {image: "img/projects/gms/13.JPG", text: "Color theme has been changed."}
            ]
var fml = [
                {image: "img/projects/fml/1.JPG", text: "Software info screen. It explains why it has been created."},
                {image: "img/projects/fml/2.JPG", text: "Home screen. All movies are displayed here."},
                {image: "img/projects/fml/3.png", text: "Movies can be filtered by genre."},
                {image: "img/projects/fml/4.png", text: "These are from the drama category."},
                {image: "img/projects/fml/5.JPG", text: "A selected movie will look like this."},
                {image: "img/projects/fml/6.JPG", text: "The \"Watch Trailer\" button will redirect to YouTube trailer in its screen."},
                {image: "img/projects/fml/7.JPG", text: "Another selected movie."},
                {image: "img/projects/fml/8.JPG", text: "And YouTube player for trailer view."},
                {image: "img/projects/fml/9.JPG", text: "And another selected movie."},
                {image: "img/projects/fml/10.png", text: "Now it is playing offline from the PC. It has its own movie player."},
                {image: "img/projects/fml/11.JPG", text: "This is the screen where we can register our favorite movies in the database."},
                {image: "img/projects/fml/12.JPG", text: "It is a table of movies, a different view to search movie and delete it."}
            ]
var sns = [
                {image: "img/projects/sns/1.JPG", text: "Log In window to EveryDay."},
                {image: "img/projects/sns/2.JPG", text: "Current user's home page."},
                {image: "img/projects/sns/3.png", text: "Here are two friend requests in pending."},
                {image: "img/projects/sns/4.JPG", text: "Current user's profile page."},
                {image: "img/projects/sns/5.JPG", text: "Current user's profile page."},
                {image: "img/projects/sns/6.JPG", text: "Friends are shown in this window."},
                {image: "img/projects/sns/7.JPG", text: "People user may know, can send friend requests."},
                {image: "img/projects/sns/8.JPG", text: "User account settings."},
                {image: "img/projects/sns/9.JPG", text: "A friend's profile page."},
                {image: "img/projects/sns/10.JPG", text: "Another friend's profile page."}
            ]
var hms = [
                {image: "img/projects/hms/1.JPG", text: "Log in screen."},
                {image: "img/projects/hms/2.JPG", text: "Home sceen."},
                {image: "img/projects/hms/3.JPG", text: "Screen for registration, customer information."},
                {image: "img/projects/hms/4.0.JPG", text: "Booking information registration."},
                {image: "img/projects/hms/4.1.JPG", text: "Room list to check availability."},
                {image: "img/projects/hms/4.2.JPG", text: "Booking status screen."},
                {image: "img/projects/hms/5.JPG", text: "Hotel service screen."},
                {image: "img/projects/hms/6.JPG", text: "Billing form."},
                {image: "img/projects/hms/7.JPG", text: "Print preview of a sample bill."},
                {image: "img/projects/hms/8.JPG", text: "Customer Check In & Out happens here."},
                {image: "img/projects/hms/9.JPG", text: "Billing status update screen."},
                {image: "img/projects/hms/10.JPG", text: "Billing status table for old bills and new ones."},
                {image: "img/projects/hms/11.JPG", text: "Customer Enquiry form."},
                {image: "img/projects/hms/12.JPG", text: "Registration form."}
            ]
var puzzle = [
                {image: "img/projects/puzzle/1.PNG", text: "Default screen."},
                {image: "img/projects/puzzle/2.PNG", text: "Counts moves & playing time."},
                {image: "img/projects/puzzle/3.PNG", text: "Only wolf has a secret!"},
                {image: "img/projects/puzzle/4.PNG", text: "When hovering on 'Show Hint' button, It shakes & blackout the screen with sound."},
                {image: "img/projects/puzzle/5.PNG", text: "Upload your won picture."},
                {image: "img/projects/puzzle/6.PNG", text: "A Lion."},
                {image: "img/projects/puzzle/7.PNG", text: "A Tiger"},
                {image: "img/projects/puzzle/8.PNG", text: "A cute Cat."},
                {image: "img/projects/puzzle/9.PNG", text: "Cute puppies."}

            ]
var zabpos = [
                {image: "img/projects/zabpos/Picture1.png", text: ""},
                {image: "img/projects/zabpos/Picture2.png", text: ""},
                {image: "img/projects/zabpos/Picture3.png", text: ""},
                {image: "img/projects/zabpos/Picture4.png", text: ""},
                {image: "img/projects/zabpos/Picture5.png", text: ""},
                {image: "img/projects/zabpos/Picture6.png", text: ""},
                {image: "img/projects/zabpos/Picture9.png", text: ""},
                {image: "img/projects/zabpos/Picture14.png", text: ""}

            ]
var th = [
                {image: "img/projects/th/1.png", text: "Home page for the Talent Hut with a Job Search Engine."},
                {image: "img/projects/th/2.png", text: "Search results and filter jobs view."},
                {image: "img/projects/th/3.png", text: "Job details."},
                {image: "img/projects/th/4.png", text: "Log in screen for the employee."},
                {image: "img/projects/th/5.png", text: "Employee Dashboard."},
                {image: "img/projects/th/6.png", text: "Job applicants view."},
                {image: "img/projects/th/7.png", text: "Applicant registration."},
                {image: "img/projects/th/8.png", text: "Applicant Log in."},
                {image: "img/projects/th/9.png", text: "Applicant dashboard."},

            ]
var ctebslt = [
                {image: "img/projects/ctebslt/LogIn.png", text: ""},
                {image: "img/projects/ctebslt/LogIn_Private.png", text: ""},
                {image: "img/projects/ctebslt/Side_Panel.png", text: ""},
                {image: "img/projects/ctebslt/Suite.png", text: ""},
                {image: "img/projects/ctebslt/User_Dashboard.png", text: ""},
                {image: "img/projects/ctebslt/User_Dashboard_old.png", text: ""}

            ]


$(".modal-body-content").height($("#detailsViewModal").height()-120);

$(window).on('resize', function(){
      $(".modal-body-content").height($("#detailsViewModal").height()-120);
});

$("#contents").on("click", ".details-btn", function(){
    var appTitle = $(this).closest(".parent-div").find(".app-title").text();   
    $("#detailsViewModal").find("#app-title").text(appTitle);
    
    if(appTitle == "BBQ"){
        contentArray = bbq; 
    }else if(appTitle == "IO Chat"){
        contentArray = ioChat; 
    }else if(appTitle == "Gym Management System"){
        contentArray = gms; 
    }else if(appTitle == "FX Movie Library"){
        contentArray = fml; 
    }else if(appTitle == "Social Networking Site"){
        contentArray = sns; 
    }else if(appTitle == "Hotel Managment System"){
        contentArray = hms; 
    }else if(appTitle == "Sliding Puzzle"){
        contentArray = puzzle; 
    }else if(appTitle == "ZAB POS"){
        contentArray = zabpos; 
    }else if(appTitle == "Talent Hut"){
        contentArray = th; 
    }else if(appTitle == "Ctrends EBS Lite"){
        contentArray = ctebslt; 
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
    