/* ==========================================
   POTHYPANNA v1
   script.js
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2500);
});


const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchBook);

document.querySelector(".search-box input")
.addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        searchBook();
    }

});

function searchBook(){

    const input=document.querySelector(".search-box input");

    const value=input.value.trim();

    if(value===""){
        alert("Please type a book name.");
        return;
    }

    searchBtn.innerHTML="🦉 Owlie is searching...";

    searchBtn.disabled=true;

    searchBtn.style.background="#f39c12";

    setTimeout(()=>{

        searchBtn.innerHTML="📚 Books Found";

    },1200);

    setTimeout(()=>{

        alert("Search functionality will be connected with the database in Part 4.");

        searchBtn.innerHTML="🔍 Search";

        searchBtn.disabled=false;

        searchBtn.style.background="#111";

    },2500);

}



const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

observer.observe(card);

});



const navItems=document.querySelectorAll("nav li");

navItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-3px)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0px)";

});

});



const logo=document.querySelector(".logo img");

logo.addEventListener("mouseenter",()=>{

logo.style.transform="rotate(-10deg) scale(1.08)";

logo.style.transition=".3s";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="rotate(0deg) scale(1)";

});



console.log("🦉 Welcome to Pothypanna");

console.log("for readers. by readers");
