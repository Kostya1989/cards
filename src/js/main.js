function newCard(number) {
  let card = document.createElement('div');
  card.classList.add('card');
  card.textContent = number;
  card.addEventListener('click', function flip() {
        card.classList.add('open')
      })
  document.getElementById('game').append(card);
}


let cardsAmount = 6,
    cardsNumberArray = [],
    cardsArray = []
function newGame(cardsAmount) {
  for( i = 1; i <= cardsAmount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }
  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);
  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(cardNumber)
  }
}

newGame(document.getElementById('game'), cardsAmount)

