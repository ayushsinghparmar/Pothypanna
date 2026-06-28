const books = [

{
title:"Atomic Habits",
author:"James Clear",
genre:"Self-help",
description:"Tiny changes that lead to remarkable results.",
cover:"https://placehold.co/300x450?text=Atomic+Habits",

amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
},

{
title:"The Alchemist",
author:"Paulo Coelho",
genre:"Philosophy",
description:"A timeless story about following your dreams.",
cover:"https://placehold.co/300x450?text=The+Alchemist",

amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
},

{
title:"Think and Grow Rich",
author:"Napoleon Hill",
genre:"Business",
description:"One of the most influential success books ever written.",
cover:"https://placehold.co/300x450?text=Think+and+Grow+Rich",

amazon:"#",
kindle:"#",
pothi:"#",
website:"#"
}

];

const booksGrid=document.getElementById("booksGrid");

function displayBooks(list){

booksGrid.innerHTML="";

list.forEach(book=>{

booksGrid.innerHTML+=`

<div class="book-card">

<img src="${book.cover}" alt="${book.title}">

<div class="book-content">

<h3>${book.title}</h3>

<p class="author">${book.author}</p>

<p class="genre">${book.genre}</p>

<p>${book.description}</p>

<div class="book-buttons">

<a href="${book.amazon}" target="_blank">Amazon</a>

<a href="${book.kindle}" target="_blank">Kindle</a>

<a href="${book.pothi}" target="_blank">Pothi</a>

<a href="${book.website}" target="_blank">Website</a>

</div>

</div>

</div>

`;

});

}

displayBooks(books);
