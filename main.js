const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
 const quoteSection = document.getElementById("quote");
 const userInput = document.getElementById("quote-input");

 let quote = "";
 let time = 50;
 let timer = "";
 let mistakes = 0;

//Display random quotes
const renderNewQuote = async () => {
    //fetch quotes from url
    const response = await fetch(quoteApiUrl);

    //store response
    let data = await response.json();

    //access quote
    quote = data.content;

    //Array of characters in the quote
    let arr = quote.split("").map(value => {
        
    })

};

 window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
 };