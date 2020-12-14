/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// see separate js file quotes.js


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomValue = Math.floor(Math.random() * quotes.length);
  return quotes[randomValue];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quote = getRandomQuote();
  let quoteHTML = `
    <p class="quote">${quote.quote}</p>
    <p class="quote">${quote.source}
  `;
  if ( quote.citation ) {
    quoteHTML += `<span class="citation">quote.citation</span>`;
  }
  if ( quote.year ) {
    quoteHTML += `<span class="year">quote.year</span>`;
  }
  quoteHTML += `</p>`;
  return quoteHTML;
}

document.getElementById('quote-box').innerHTML = printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);