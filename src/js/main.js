let card;
let cardNumber;
let cardsAmount = 6,
    cardsNumberArray = [],
    cardsArray = [],
    cardsAddarr = []

function startGame() {
  function getCard(number) {
    for (j = 1; j <= cardsAmount; j++) {
      let card = document.createElement('div');
      card.classList.add('card');
      card.textContent = number;
      card.addEventListener('click', function flip() {
        card.classList.add('open')
      })
      for ( i = 1; i < cardsAmount / 2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
      }
      cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);
      for (const cardNumber of cardsNumberArray) {
        cardsArray.push(cardNumber)
      }
      for (k = 1; k < cardsNumberArray.length; k++) {
        cardsAddarr.push(k)
      }
      document.getElementById('game').append(card);
    }
  }console.log(cardsAddarr)
  return getCard(cardsArray.push(card))
}
startGame()
