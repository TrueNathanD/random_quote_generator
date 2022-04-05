console.log('connected')

//an array of quotes
const arrayOfQuotes = ["A few words.", "Something else.", "Words of wisdom."];


//function to grab a quote at random
const pickAQuote = () => {
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    let quote = arrayOfQuotes[randomIndex];
    console.log(quote);
    return quote;
}

//console.log(pickAQuote());
document.getElementById('quoteButton').addEventListener('click', pickAQuote);
