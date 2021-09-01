import React, { Component } from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import Interface from './components/Interface';
import "bootstrap/dist/css/bootstrap.min.css";

const deck = [
  { card: 2, suit: '💔' }, { card: 2, suit: '🔶' }, { card: 2, suit: '♠' }, { card: 2, suit: '♣' }, { card: 3, suit: '💔' }, { card: 3, suit: '🔶' },
  { card: 3, suit: '♠' }, { card: 3, suit: '♣' }, { card: 4, suit: '💔' }, { card: 4, suit: '🔶' }, { card: 4, suit: '♠' }, { card: 4, suit: '♣' },
  { card: 5, suit: '💔' }, { card: 5, suit: '🔶' }, { card: 5, suit: '♠' }, { card: 5, suit: '♣' }, { card: 6, suit: '💔' },
  { card: 6, suit: '🔶' }, { card: 6, suit: '♠' }, { card: 6, suit: '♣' }, { card: 7, suit: '💔' }, { card: 7, suit: '🔶' },
  { card: 7, suit: '♠' }, { card: 7, suit: '♣' }, { card: 8, suit: '💔' }, { card: 8, suit: '🔶' }, { card: 8, suit: '♠' },
  { card: 8, suit: '♣' }, { card: 9, suit: '💔' }, { card: 9, suit: '🔶' }, { card: 9, suit: '♠' }, { card: 9, suit: '♣' },
  { card: 10, suit: '💔' }, { card: 10, suit: '🔶' }, { card: 10, suit: '♠' }, { card: 10, suit: '♣' }, { card: 'A', suit: '💔' },
  { card: 'A', suit: '🔶' }, { card: 'A', suit: '♠' }, { card: 'A', suit: '♣' }, { card: 'J', suit: '💔' }, { card: 'J', suit: '🔶' },
  { card: 'J', suit: '♠' }, { card: 'J', suit: '♣' }, { card: 'Q', suit: '💔' }, { card: 'Q', suit: '🔶' }, { card: 'Q', suit: '♠' },
  { card: 'Q', suit: '♣' }, { card: 'K', suit: '💔' }, { card: 'K', suit: '🔶' }, { card: 'K', suit: '♠' }, { card: 'K', suit: '♣' }
]

let count = 0;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerCards: [],
      dealerCards: [],
      scorePlayer: 0,
      scoreDealer: 0,
      gameStart: false,
      gameEnd: false,
      playerStop: false

    }
  }

  componentDidMount() {


  }

  start = () => {

    let newCard1 = this.newCard()
    let newCard2 = this.newCard()

    let playerCards = this.state.playerCards
    this.setState({
      gameStart: true,
      playerCards: [...playerCards, newCard1, newCard2]
    })
    this.updateScorePlayer(newCard1, newCard2)

  }

  startDealer = () => {
    let newCard1 = this.newCard()
    // let newCard2 = this.newCard()
    count ++
    
if (this.state.playerStop  && count < 2 ) {

  console.log('dealer start')
  this.setState({
    dealerCards: [...this.state.dealerCards, newCard1 ]
  })
  this.updateScoreDealer(newCard1)

}
if(this.state.scoreDealer < 17 ) {
  this.setState({
    dealerCards: [...this.state.dealerCards, newCard1 ]
  })
   this.updateScoreDealer(newCard1)
} 
if(this.state.scoreDealer > 17 ) {
  this.setState({
    gameEnd: true
  })
}
   
  }


  updateScorePlayer = (value1, value2) => {
    let scorePlayer = this.state.scorePlayer

    this.setState({ scorePlayer: scorePlayer += value1.card + value2.card })
  }

  updateScoreDealer = (value) => {
    let scoreDealer = this.state.scoreDealer    
    

    this.setState({ scoreDealer: scoreDealer += value.card })
    console.log('dealer score update') 

    setTimeout(()=>{

      this.rePlayDealer()
    },2000)

  }

  rePlayDealer = () => {    
    
     this.startDealer()  // to fix 
  }


  newCard = () => {
    const randomCards = Math.floor(Math.random() * deck.length);
    switch (deck[randomCards].card) {
      case 'J':
      case 'Q':
      case 'K':
        deck[randomCards].card = 10
        break;
      case 'A':
        deck[randomCards].card = 11;
        break;

      default:
        break;
    }

    return { card: deck[randomCards].card, suit: deck[randomCards].suit };
  }


  clickContinue = (e) => {
    e.preventDefault()
    let newCard = this.newCard()
    let playerCards = this.state.playerCards
    
      this.setState({
        playerCards: [...playerCards, newCard],
        scorePlayer: this.state.scorePlayer + newCard.card
      })   

  }

  clickStop = () => {
    this.setState({ playerStop: true })
    this.startDealer()
  }

  render() {

    console.log('game start', this.state.gameStart)
    console.log('---------------------------------------------')    
    console.log('player cards', this.state.playerCards)
    console.log('dealer cards', this.state.dealerCards)
    console.log('---------------------------------------------')    
    console.log('total player score', this.state.scorePlayer)
    console.log('total dealer score', this.state.scoreDealer)
    console.log('---------------------------------------------')    
    console.log('player has stop', this.state.playerStop)
    console.log('---------------------------------------------') 
    console.log('game end', this.state.gameEnd)



    return (
      <>
        <h1>Black Jack Game</h1>

        {!this.state.gameStart &&

          <button className="btn btn-outline-success" onClick={this.start}>Start game</button>}

        {this.state.gameStart &&

          <Interface

            scorePlayer={this.state.scorePlayer}
            scoreDealer={this.state.scoreDealer}
            playerStop ={this.state.playerStop}
            gameEnd ={this.state.gameEnd}


            containerPlayer={
              this.state.playerCards.map((card) => {
                return <Cards start={this.start} playerCard={card.card + ' ' +card.suit} />
              })}



            containerDealer={
              this.state.dealerCards.map((card) => {
                return <Cards start={this.start} dealerCard={card.card + ' ' +card.suit} playerStop={this.state.playerStop} />
              })}

            containerButtons={
              <Button gameStart={this.state.gameStart} clickContinue={this.clickContinue} clickStop={this.clickStop} playerStop={this.state.playerStop} />
            }

          />
        }


      </>
    )
  }
}

export default App
