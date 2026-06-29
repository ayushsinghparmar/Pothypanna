const SUPABASE_URL = "https://vwueomdiatgjkbqxdwzk.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_9DDEETnQ2I4AtLmal4TNSw_0QmYGnV6";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("error").textContent = error.message;
    return;
  }

  window.location.href = "dashboard.html";

});
