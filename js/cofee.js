$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }

    }
})

const nav=["About Us", "Our Product", "Delivery"];
const links=["aboutus.html", "ourproduct.html", "delivery.html"]; 
let navtext = '<ul class="flex">';

for(let i = 0; i<nav.length; i++){
    navtext +='<li><a href=' +links[i]+'>'+ nav[i]+"</a></li>";
}
navtext += "</ul>";
console.log(navtext);
document.getElementById("navbar").innerHTML=navtext;
  
const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".navbar");
humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navColor.classList.toggle("active");
})





function touch(){
    document.getElementById("hotbtn").style.border="2px solid #FF902A";  
}
function untouch(){
    document.getElementById("hotbtn").style.border="2px solid #F9D9AA";  
}
function click(){
    document.getElementById("hotbtn").style.color="#2F2105";
    document.getElementById("hotbtn").style.backgroundColor="#646464";
}
function unclick(){
    document.getElementById("hotbtn").style.color="#F9D9AA";
    document.getElementById("hotbtn").style.backgroundColor="#FFFFFF";
}
function touchcold(){
    document.getElementById("coldbtn").style.border="2px solid #FF902A";
}
function untouchcold(){
    document.getElementById("coldbtn").style.border="2px solid #F9D9AA";
}
function clickcold(){
    document.getElementById("coldbtn").style.color="#2F2105"; 
    document.getElementById("coldbtn").style.backgroundColor="#646464";
}

function unclickcold(){
    document.getElementById("coldbtn").style.color="#F9D9AA";
    document.getElementById("coldbtn").style.backgroundColor="#FFFFFF";
}



document.getElementById("hotbtn").addEventListener("click",click);
document.getElementById("hotbtn").addEventListener("dblclick",unclick);
document.getElementById("hotbtn").addEventListener("mouseover",touch);
document.getElementById("hotbtn").addEventListener("mouseout",untouch);
document.getElementById("coldbtn").addEventListener("click",clickcold);
document.getElementById("coldbtn").addEventListener("dblclick",unclickcold);
document.getElementById("coldbtn").addEventListener("mouseover",touchcold);
document.getElementById("coldbtn").addEventListener("mouseout",untouchcold);



function book(){
    document.getElementById("buy").style.backgroundColor="#646464";
}
function rebook(){
    document.getElementById("buy").style.backgroundColor="#FF902A";
}
function touchbag(){
    document.getElementById("buy").style.border="2px solid #FF902A";
}
function untouchbag(){
    document.getElementById("buy").style.border="2px solid #F9D9AA";
}
document.getElementById("buy").addEventListener("click",book);
document.getElementById("buy").addEventListener("dblclick",rebook);
document.getElementById("buy").addEventListener("mouseover",touchbag);
document.getElementById("buy").addEventListener("mouseout",untouchbag);


function touchhotexspreso(){
    document.getElementById("hotexspreso").style.border="2px solid #FF902A";  
}
function untouchhotexspreso(){
    document.getElementById("hotexspreso").style.border="2px solid #F9D9AA";  
}
function clickhotexspreso(){
    document.getElementById("hotexspreso").style.color="#2F2105";
    document.getElementById("hotexspreso").style.backgroundColor="#646464";
}
function unclickhotexspreso(){
    document.getElementById("hotexspreso").style.color="#F9D9AA";
    document.getElementById("hotexspreso").style.backgroundColor="#FFFFFF";
}
document.getElementById("hotexspreso").addEventListener("click",clickhotexspreso);
document.getElementById("hotexspreso").addEventListener("dblclick",unclickhotexspreso);
document.getElementById("hotexspreso").addEventListener("mouseover",touchhotexspreso);
document.getElementById("hotexspreso").addEventListener("mouseout",untouchhotexspreso);

function touchcoldexspreso(){
    document.getElementById("coldexspreso").style.border="2px solid #FF902A";  
}
function untouchcoldexspreso(){
    document.getElementById("coldexspreso").style.border="2px solid #F9D9AA";  
}
function clickcoldexspreso(){
    document.getElementById("coldexspreso").style.color="#2F2105";
    document.getElementById("coldexspreso").style.backgroundColor="#646464";
}
function unclickcoldexspreso(){
    document.getElementById("coldexspreso").style.color="#F9D9AA";
    document.getElementById("coldexspreso").style.backgroundColor="#FFFFFF";
}
document.getElementById("coldexspreso").addEventListener("click",clickcoldexspreso);
document.getElementById("coldexspreso").addEventListener("dblclick",unclickcoldexspreso);
document.getElementById("coldexspreso").addEventListener("mouseover",touchcoldexspreso);
document.getElementById("coldexspreso").addEventListener("mouseout",untouchcoldexspreso);

function book1(){
    document.getElementById("buy1").style.backgroundColor="#646464";
}
function rebook1(){
    document.getElementById("buy1").style.backgroundColor="#FF902A";
}
function touchbag1(){
    document.getElementById("buy1").style.border="2px solid #FF902A";
}
function untouchbag1(){
    document.getElementById("buy1").style.border="2px solid #F9D9AA";
}
document.getElementById("buy1").addEventListener("click",book1);
document.getElementById("buy1").addEventListener("dblclick",rebook1);
document.getElementById("buy1").addEventListener("mouseover",touchbag1);
document.getElementById("buy1").addEventListener("mouseout",untouchbag1);

function touchhotlate(){
    document.getElementById("hotlate").style.border="2px solid #FF902A";  
}
function untouchhotlate(){
    document.getElementById("hotlate").style.border="2px solid #F9D9AA";  
}
function clickhotlate(){
    document.getElementById("hotlate").style.color="#2F2105";
    document.getElementById("hotlate").style.backgroundColor="#646464";
}
function unclickhotlate(){
    document.getElementById("hotlate").style.color="#F9D9AA";
    document.getElementById("hotlate").style.backgroundColor="#FFFFFF";
}
document.getElementById("hotlate").addEventListener("click",clickhotlate);
document.getElementById("hotlate").addEventListener("dblclick",unclickhotlate);
document.getElementById("hotlate").addEventListener("mouseover",touchhotlate);
document.getElementById("hotlate").addEventListener("mouseout",untouchhotlate);

function touchcoldlate(){
    document.getElementById("coldlate").style.border="2px solid #FF902A";  
}
function untouchcoldlate(){
    document.getElementById("coldlate").style.border="2px solid #F9D9AA";  
}
function clickcoldlate(){
    document.getElementById("coldlate").style.color="#2F2105";
    document.getElementById("coldlate").style.backgroundColor="#646464";
}
function unclickcoldlate(){
    document.getElementById("coldlate").style.color="#F9D9AA";
    document.getElementById("coldlate").style.backgroundColor="#FFFFFF";
}
document.getElementById("coldlate").addEventListener("click",clickcoldlate);
document.getElementById("coldlate").addEventListener("dblclick",unclickcoldlate);
document.getElementById("coldlate").addEventListener("mouseover",touchcoldlate);
document.getElementById("coldlate").addEventListener("mouseout",untouchcoldlate);

function book2(){
    document.getElementById("buy2").style.backgroundColor="#646464";
}
function rebook2(){
    document.getElementById("buy2").style.backgroundColor="#FF902A";
}
function touchbag2(){
    document.getElementById("buy2").style.border="2px solid #FF902A";
}
function untouchbag2(){
    document.getElementById("buy2").style.border="2px solid #F9D9AA";
}
document.getElementById("buy2").addEventListener("click",book2);
document.getElementById("buy2").addEventListener("dblclick",rebook2);
document.getElementById("buy2").addEventListener("mouseover",touchbag2);
document.getElementById("buy2").addEventListener("mouseout",untouchbag2);



function bookCoffee(id){
    id.style.backgroundColor="#646464";
}
function rebookCoffee(id){
    id.style.backgroundColor="#FF902A";
}













function massageBoxOn(id){
    document.getElementById("massagebox").style.display = "block";
}

function massageBoxOff(){
    document.getElementById("massagebox").style.display = "none";
}






