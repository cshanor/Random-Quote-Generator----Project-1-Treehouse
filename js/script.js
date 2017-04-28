var quotes = [
    {
        quote:"When small men attempt great enterprises, they always end by reducing them to the level of their mediocrity.", source:"Napoleon Bonaparte", citation:"Napoleon", year:1985
    },
    {
        quote:"Make it so.", source:"Captain Jean Luc Picard", citation: "Star Trek", year:1990
    },
    {
        quote:"Hail", source:"Odin", citation:"Havamal", year:0
    },
    {
        quote:"Service to others is the rent you pay for your room here on earth.", source:"Muhammad Ali", citation: "Sports Illustrated", year:1523
    }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * (quotes.length))];
}

/*function getCitation() {
    if ( undefined != quotes.citation) {
        return document.getElementById('quote-citation').style.display="none";
    } else {
        return quotes.citation;
    }
}

function getYear() {
    if ( undefined != quotes.year) {
        return document.getElementById('quote-year').style.display="none";
    } else {
        return quotes.year;
    }
}*/

function printQuote() {
    var randomQuote = getRandomQuote();
    document.getElementById('quote-box').innerHTML ='<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source +
        '<span id="quote-citation" class="citation">' + randomQuote.citation + '</span><span id="quote-year" class="year">' + randomQuote.year + '</span></p>';
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


