/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

// see separate js file quotes.js

// Random number in range 0-255 used for colour settings
const randomColour = () => Math.floor(Math.random() * 256);

// RGB colour string in CSS format 
const randomRGB = () => `rgb( ${randomColour()}, ${randomColour()}, ${randomColour()} )`;

// Array containing indexes of quotes that have been displayed.  To keep track
// so all quotes will be displayed before any repeat.
let quotesDisplayed = [];

/***
 * `getRandomQuote` function
 * 
 * @param None
 * @returns quotes object
 * 
 * Select and return one quote to display.
 * Randomly selected, but ensure a new quote is picked until all quotes have been
 * displayed
***/

function getRandomQuote() {
  // if size (length) of quotesDisplayed array equals that of quotes array, all quotes
  // have been displayed.  So reset the quotesDisplayed array and start over.
  if (quotesDisplayed.length === quotes.length) {
	  quotesDisplayed = [];
  }
  // pick random quote to display but not one that has already been displayed by
  // ensuring that the random index picked not already in the quotesDisplayed array.
  let randomValue;
  do {
    randomValue = Math.floor(Math.random() * quotes.length);
  } while ( quotesDisplayed.includes(randomValue) );

  quotesDisplayed.push(randomValue);
  return quotes[randomValue];
}

/***
 * `printQuote` function
 * 
 * @param None
 * @returns None
 * 
 * HTML formatting and display to webpage of one quote
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
  // Set background colour to a random RGB value
  document.getElementById('quote-box').style.backgroundColor = randomRGB();
  // display the quote on the webpage
  document.getElementById('quote-box').innerHTML = quoteHTML;
}

// initial call of printQuote, done so one of my quotes will display immediately 
// rather than the default quote in the base index.html
printQuote();

// Time in milliseconds between auto-refresh of quotes (= 10 seconds)
const refreshInterval = 10000;

// update the quote displayed at regular intervals per above refreshInterval variable.
window.setInterval(printQuote, refreshInterval);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);