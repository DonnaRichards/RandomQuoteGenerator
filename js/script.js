/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

// see separate js file quotes.js


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomValue = Math.floor(Math.random() * quotes.length);
  console.log(randomValue);
  return quotes[randomValue];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quote = getRandomQuote();
  console.log(quote);
  let quoteHTML = `
    <p class="quote">${quote.quote}</p>
    <p class="quote">${quote.source}
  `;
  if ( quote.citation ) {
    quoteHTML += `<span class="citation">${quote.citation}</span>`;
  }
  if ( quote.year ) {
    quoteHTML += `<span class="year">${quote.year}</span>`;
  }
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML;
  //return quoteHTML;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);