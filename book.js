const books = [
{
id:1,
title:"Atomic Habits",
author:"James Clear",
genre:"Self-help",
description:"Tiny changes that lead to remarkable results.",
language:"English",
formats:"Paperback • Kindle • eBook",
cover:"https://placehold.co/400x600?text=Atomic+Habits",
amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
},

{
id:2,
title:"The Alchemist",
author:"Paulo Coelho",
genre:"Philosophy",
description:"A timeless story about following your dreams.",
language:"English",
formats:"Paperback • Kindle • eBook",
cover:"https://placehold.co/400x600?text=The+Alchemist",
amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
},

{
id:3,
title:"Think and Grow Rich",
author:"Napoleon Hill",
genre:"Business",
description:"One of the most influential success books ever written.",
language:"English",
formats:"Paperback • Kindle • eBook",
cover:"https://placehold.co/400x600?text=Think+and+Grow+Rich",
amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
}
];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id")) || 1;

const book = books.find(b => b.id === id);

if(book){

document.getElementById("bookCover").src = book.cover;
document.getElementById("bookTitle").textContent = book.title;
document.getElementById("bookAuthor").textContent = book.author;
document.getElementById("bookGenre").textContent = book.genre;
document.getElementById("bookDescription").textContent = book.description;
document.getElementById("bookLanguage").textContent = book.language;
document.getElementById("bookFormats").textContent = book.formats;

document.getElementById("amazonBtn").href = book.amazon;
document.getElementById("kindleBtn").href = book.kindle;
document.getElementById("pothiBtn").href = book.pothi;
document.getElementById("websiteBtn").href = book.website;

}
