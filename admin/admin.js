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
