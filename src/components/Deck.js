// const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'J', 'Q', 'K'];
// const suits = ['Co', 'Ca', 'Pi', 'Tr'];

// const desk = [];

// for (let i = 0; i < cards.length; i++) {
//     for (let j = 0; j < suits.length; j++) {
//         desk.push({card: cards[i] , suit: suits[j]})
//     };
// };
// console.log(desk.flatMap((el)=>{
//      return el
// }))

// const deckAll = [
//     { card: 2, suit: '♡ ' }, { card: 2, suit: '♢' }, { card: 2, suit: '♠' }, { card: 2, suit: '♣' }, { card: 3, suit: '♡ ' }, { card: 3, suit: '♢' },
//     { card: 3, suit: '♠' }, { card: 3, suit: '♣' }, { card: 4, suit: '♡ ' }, { card: 4, suit: '♢' }, { card: 4, suit: '♠' }, { card: 4, suit: '♣' },
//     { card: 5, suit: '♡ ' }, { card: 5, suit: '♢' }, { card: 5, suit: '♠' }, { card: 5, suit: '♣' }, { card: 6, suit: '♡ ' },
//     { card: 6, suit: '♢' }, { card: 6, suit: '♠' }, { card: 6, suit: '♣' }, { card: 7, suit: '♡ ' }, { card: 7, suit: '♢' },
//     { card: 7, suit: '♠' }, { card: 7, suit: '♣' }, { card: 8, suit: '♡ ' }, { card: 8, suit: '♢' }, { card: 8, suit: '♠' },
//     { card: 8, suit: '♣' }, { card: 9, suit: '♡ ' }, { card: 9, suit: '♢' }, { card: 9, suit: '♠' }, { card: 9, suit: '♣' },
//     { card: 10, suit: '♡ ' }, { card: 10, suit: '♢' }, { card: 10, suit: '♠' }, { card: 10, suit: '♣' }, { card: 'A', suit: '♡ ' },
//     { card: 'A', suit: '♢' }, { card: 'A', suit: '♠' }, { card: 'A', suit: '♣' }, { card: 'J', suit: '♡ ' }, { card: 'J', suit: '♢' },
//     { card: 'J', suit: '♠' }, { card: 'J', suit: '♣' }, { card: 'Q', suit: '♡ ' }, { card: 'Q', suit: '♢' }, { card: 'Q', suit: '♠' },
//     { card: 'Q', suit: '♣' }, { card: 'K', suit: '♡ ' }, { card: 'K', suit: '♢' }, { card: 'K', suit: '♠' }, { card: 'K', suit: '♣' }
//   ]
// //   handleReplay = () => {
// //     this.setState({gameStart:gameEnd: false, playerStop: false, dealerStop: false})
// //   }

const teams = ["FC space invader", "react squad"]

const randomNumber = Math.floor(Math.random() * teams.length) 

console.log(teams[randomNumber])
