const SUPABASE_URL = "https://vwueomdiatgjkbqxdwzk.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_9DDEETnQ2I4AtLmal4TNSw_0QmYGnV6";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

/* -----------------------------
   AUTO LOGIN
------------------------------*/

(async () => {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (
        session &&
        window.location.pathname.endsWith("login.html")
    ) {
        window.location.href = "dashboard.html";
    }

})();

/* -----------------------------
   LOGIN
------------------------------*/

const form = document.getElementById("loginForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const errorBox = document.getElementById("error");

        errorBox.textContent = "";

        const { error } =
            await supabaseClient.auth.signInWithPassword({

                email,

                password

            });

        if (error) {

            errorBox.textContent = error.message;

            return;

        }

        window.location.href = "dashboard.html";

    });

}

/* -----------------------------
   PROTECT DASHBOARD
------------------------------*/

(async () => {

    const protectedPages = [
    "dashboard.html",
    "books.html",
    "add-book.html",
    "authors.html",
    "categories.html",
    "platforms.html",
    "settings.html"
];

const currentPage = window.location.pathname.split("/").pop();

if (!protectedPages.includes(currentPage)) return;

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (!session) {

        window.location.href = "login.html";

        return;

    }

})();

/* -----------------------------
   LOGOUT
------------------------------*/

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        await supabaseClient.auth.signOut();

        localStorage.clear();
        sessionStorage.clear();

        window.location.replace("login.html");

    });

}
/* ==========================
AUTOMATIC GREETING
========================== */

const hour = new Date().getHours();

const greeting = document.getElementById("greeting");
const icon = document.getElementById("greetingIcon");

if (greeting && icon) {

if (hour >= 5 && hour < 12) {

greeting.textContent = "Good Morning";
icon.textContent = "🌅";

}

else if (hour >= 12 && hour < 17) {

greeting.textContent = "Good Afternoon";
icon.textContent = "☀️";

}

else if (hour >= 17 && hour < 21) {

greeting.textContent = "Good Evening";
icon.textContent = "🌇";

}

else {

greeting.textContent = "Good Night";
icon.textContent = "🌙";

}

}
/* ==========================================
DASHBOARD INTERACTIONS
========================================== */

const notificationBtn=document.getElementById("notificationBtn");
const notificationDropdown=document.getElementById("notificationDropdown");
const adminMenuBtn=document.getElementById("adminMenuBtn");
const adminDropdown=document.getElementById("adminDropdown");
const dropdownLogout=document.getElementById("dropdownLogout");

/* Quick Actions */

document.querySelectorAll(".action-card[data-page]").forEach(card=>{
card.onclick=()=>window.location.href=card.dataset.page;
});

/* Stat Cards */

document.querySelectorAll(".stat-card[data-page]").forEach(card=>{
card.onclick=()=>window.location.href=card.dataset.page;
});

/* Notifications */

if(notificationBtn&&notificationDropdown){

notificationBtn.onclick=(e)=>{

e.stopPropagation();

notificationDropdown.classList.toggle("show");

adminDropdown?.classList.remove("show");

};

}

/* Admin Menu */

if(adminMenuBtn&&adminDropdown){

adminMenuBtn.onclick=(e)=>{

e.stopPropagation();

adminDropdown.classList.toggle("show");

notificationDropdown?.classList.remove("show");

};

}

/* Close Dropdowns */

document.onclick=()=>{

notificationDropdown?.classList.remove("show");

adminDropdown?.classList.remove("show");

};

/* Logout */

if(dropdownLogout){

dropdownLogout.onclick=(e)=>{

e.preventDefault();

localStorage.clear();

sessionStorage.clear();

window.location.href="login.html";

};

}

/* Sidebar Active */

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-link").forEach(link=>{

if(link.getAttribute("href")===currentPage){

document.querySelectorAll(".sidebar-menu li").forEach(li=>li.classList.remove("active"));

link.parentElement.classList.add("active");

}

});
