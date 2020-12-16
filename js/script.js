/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

// see separate js file quotes.js

const randomColour = () => Math.floor(Math.random() * 256);

const randomRGB = () => `rgb( ${randomColour()}, ${randomColour()}, ${randomColour()} )`;

/***
 * `getRandomQuote` function
***/

let quotesUndisplayed = [];

function getRandomQuote() {
  if (quotesUndisplayed.length === quotes.length) {
	  quotesUndisplayed = [];
  }
  let randomValue;
  do {
    randomValue = Math.floor(Math.random() * quotes.length);
  } while ( ! quotesUndisplayed.includes(randomValue) );
  quotesUndisplayed.push(randomValue);
  console.log(randomValue);
  return quotes[randomValue];
}

/***
 * `printQuote` function
***/


function printQuote() {
  const quote = getRandomQuote();
  let quoteHTML = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;
  if ( quote.citation ) {
    quoteHTML += `<span class="citation">${quote.citation}</span>`;
  }
  if ( quote.year ) {
    quoteHTML += `<span class="year">${quote.year}</span>`;
  }
  if ( quote.tags.length > 0 ) {
    quoteHTML += `</p><p><span class="tags">${quote.tags.join(', ')}</span>`;
  }
  quoteHTML += `</p>`;
  document.getElementById('quote-box').style.backgroundColor = randomRGB();
  document.getElementById('quote-box').innerHTML = quoteHTML;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);