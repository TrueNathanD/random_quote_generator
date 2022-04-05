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
document.getElementById('quoteButton').addEventListener('click', pickQuoteFromAPI);


//try with API
async function pickQuoteFromAPI() {
    //grabs the entire collection of quotes
    const response = await fetch("https://type.fit/api/quotes");
    //saves in json format
    const responseAsJSON = await response.json();
    //choose one at random
    const randomIndex = Math.floor(Math.random() * responseAsJSON.length);
    //API returns quote text in all cases
    console.log(responseAsJSON[randomIndex].text);
    //Some quotes have no author listed, so author is null
    console.log(responseAsJSON[randomIndex].author);
    
}
