console.log('connected')

//an array of quotes
//const arrayOfQuotes = ["A few words.", "Something else.", "Words of wisdom."];


//function to grab a quote at random
/*const pickAQuote = () => {
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    let quote = arrayOfQuotes[randomIndex];
    console.log(quote);
    return quote;
}
*/

                // TURN BACK ON IF NEEDED
//console.log(pickAQuote());
// document.getElementById('quoteButton').addEventListener('click', pickQuoteFromAPI);


//try with API
// async function pickQuoteFromAPI() {
//     //grabs the entire collection of quotes
//     const response = await fetch("https://type.fit/api/quotes");
//     //saves in json format
//     const responseAsJSON = await response.json();
//     //choose one at random
//     const randomIndex = Math.floor(Math.random() * responseAsJSON.length);
//     //API returns quote text in all cases
//     console.log(responseAsJSON[randomIndex].text);
//     //Some quotes have no author listed, so author is null
//     console.log(responseAsJSON[randomIndex].author);
    
// }
                // TURN BACK ON IF NEEDED

                // Inspiration springs forth below!

                // This code gets the data
let gatherQuote = async () => {
    let url = "https://type.fit/api/quotes";
    try {
        let response = await fetch(url, {method:"GET"})
        if (response.ok) {
            let responseJson = await response.json();
            let quote = responseJson;
            return quote;
        }
    } catch(err) {
        console.error(err);
    }
}

                // This code randomizes and selects the data to return onClick

let getRandomQuote = async () => {
    let randomQuote = await gatherQuote();
    let randomizeNumber = Math.floor(Math.random() * randomQuote.length);
    text.innerHTML = `" ${randomQuote[randomizeNumber].text} "`;
    author.innerHTML = randomQuote[randomizeNumber].author;
    return randomQuote[randomizeNumber];
}
