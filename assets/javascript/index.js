//Bookmarked btn
let bookmark_btn =$(".icon");
let bookmarked=false;
let circle =$(".icon svg g circle");
let path =$(".icon svg g path");
let bookmark_text=$("#bm");
let bookmark_a=$(".icon a");

bookmark_btn.on("click",function(){
    if(bookmarked===false){
        bookmark_text.text("Bookmarked");
        circle.css("fill","hsl(176, 72%, 28%)");
        path.css("fill","white");
        bookmark_a.css("color","hsl(176, 72%, 28%)");
        bookmarked=true;
    }else{
        bookmark_text.text("Bookmark"); 
        circle.css("fill","hsl(0, 0%, 40%)");
        path.css("fill","#B1B1B1");
        bookmark_a.css("color","hsl(0, 0%, 40%)"); 
        bookmarked=false;
    }
});

//Pledege Thank you

let selectBtns=$(".select-btn");
for(let i=0; i<selectBtns.length; i++){ 
selectBtns[i].addEventListener("click",function(){
    $(".modal").css("display","inline-block");
})
}
$(".modal-btn").on("click",function(){
    $(".modal").hide();
    $(".project-modal").hide();
})

//Backed project button
let backedBtn=$("#bookmark");
let closeBtn=$(".close");
backedBtn.on("click",function(){
    $(".project-modal").css("display","block");
})
closeBtn.on("click",function(){
    $(".project-modal").hide();
})


//Pledege section slide
let itemBtn=$(".item-title");
for(let i=0; i<itemBtn.length; i++){
    itemBtn[i].addEventListener("click",function(){
        let panelId =this.getAttribute("data-panel");
        $(".slide"+panelId).slideDown("slow");
        $(".item"+panelId).css("border","2px solid hsl(176, 72%, 28%)");
        $(".item"+panelId).siblings().css("border","1px solid hsl(0, 0%, 85%)"); 
        let sib= $(".item"+panelId).siblings();
           sib.find(".slide").slideUp("slow");
    })
}

//Pledege continue 
let pledgeSubmit=$(".pledgeSubmit");

pledgeSubmit.on("click",()=>{
    console.log("clicked");
    $(".modal").css("display","block");
})

//Mobile nav-bar
let mobileNav=$(".mobile-nav");
let mobileNavClose=$(".mobile-navClose");

mobileNav.on("click",()=>{
    $(".nav-barMobile").slideDown("slow");
    $(".mobile-nav").css("display","none");
    mobileNavClose.css("display","block");
})

mobileNavClose.on("click",()=>{
    $(".nav-barMobile").hide();
    $(".mobile-nav").css("display","block");
    mobileNavClose.css("display","none");
})





