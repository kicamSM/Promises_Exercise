// Part 1 Number Facts 

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

let favoriteNum = 12
baseURL = 'http://numbersapi.com'

let singData = $.get(`${baseURL}/${favoriteNum}/trivia?notfound=floor&fragment?json`, function(data) {
    $('#number').text(data);
});

// console.log(singData)

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

let multipleNums = [15,16,33,45]

let multData = $.get(`${baseURL}/${multipleNums}/trivia?notfound=floor&fragment?json`, function(data) {
    $('#numbers').text(data);
    // console.log(multData)
});

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let facts = []

for(i = 0; i < 4; i++) {
    facts.push($.get(`${baseURL}/${favoriteNum}/trivia?notfound=floor&fragment?json`))
    // $('#facts').text(facts);
}

Promise.all(facts)
.then(factsArr => (
    factsArr.forEach(f => $('#facts').append(`<p>${f}</p>`))
))
.catch (err => console.log(err));


// PART 2 

// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let deckBaseURL = 'https://deckofcardsapi.com/api/deck'

let card = $.get(`${deckBaseURL}/new/draw/?count=1`, function(data) {
   console.log(data.cards[0].value.toLowerCase(), 'of', data.cards[0].suit.toLowerCase())

});

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

let firstCard = $.getJSON(`${deckBaseURL}/new/draw/?count=1`)
.then(firstCardData => {
    let deck_id = firstCardData.deck_id
    let secondCard = $.getJSON(`${deckBaseURL}/${deck_id}/draw/?count=1`);

    return secondCard
    // must have return statment!!!!
   
.then(secondCardData => { 
    console.log('first card:', firstCardData.cards[0].value.toLowerCase(), 'of', firstCardData.cards[0].suit.toLowerCase(),'second card:', secondCardData.cards[0].value.toLowerCase(), 'of', secondCardData.cards[0].suit.toLowerCase())
});
});
    
// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let $cards = $('#cards')
let $btn = $('button')
let thisDeckId = null;


$.getJSON(`${deckBaseURL}/new/shuffle/`).then(data => {
    thisDeckId = data.deck_id;
    $btn.show();
    console.log('first one is running')
  });

$btn.on('click', function() {
    console.log('button has been clicked')
$.getJSON(`${deckBaseURL}/${thisDeckId}/draw/`).then(data => {
    let cardSrc = data.cards[0].image;

    $cards.append(
        $('<img>', {
            src: cardSrc,
          })
    )
   
    if(data.remaining == 0) {
        $btn.remove()
        $cards.append('You have gone through the entire deck!!')
    }
}) 
})


// let this_card = $.getJSON(`${deckBaseURL}/new/draw/?count=1`, function(data) {
//     console.log(data.cards[0].value, 'of', data.cards[0].suit)
//     .then(thisCardData => {
//         let deck_id = thisCardData.deck_id
//         let anotherCard = $.getJSON(`${deckBaseURL}/${deck_id}/draw/?count=1`);
//         $('#cards').text(thisCardData.cards[0].value + ' of ' + thisCardData.cards[0].suit);
//         return anotherCard

//     .then(anotherCardData =>{
//         $('#cards').text(this_card)
//     })
 
//  });

// });


