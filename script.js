//project : javaScript quote generator

//varibales
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".person");

const quotes = [
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        person: "Oprah Winfrey"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    }
];

//adding event listener
btn.addEventListener('click',(e)=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].person;
    
});


