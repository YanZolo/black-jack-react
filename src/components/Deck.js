const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'J', 'Q', 'K'];
const suits = ['Co', 'Ca', 'Pi', 'Tr'];
const desk = [];

for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        desk.push({card: cards[i] , suit: suits[j]})
    };
};
console.log(desk.flatMap((el)=>{
     return el
}))




