const names = ("Guadalupe", "Ollie", "Aki");

function writeCards(names) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
    cards[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
        return cards;
}

function countDown (countdown) {
    for (let countdown = 10; countdown >= 0; countdown--) {
        console.log(countdown);
    }
}
    
