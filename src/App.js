import React, { Component } from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import TableInterface from './components/TableInterface';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartingInterface from './components/StartingInterface';
import ReplayInterface from './components/ReplayInterface';
import {
  img_2_of_clubs, img_2_of_diamonds, img_2_of_hearts, img_2_of_spades, img_3_of_clubs, img_3_of_diamonds, img_3_of_hearts, img_3_of_spades, img_4_of_clubs, img_4_of_diamonds, img_4_of_hearts, img_4_of_spades, img_5_of_clubs, img_5_of_diamonds, img_5_of_hearts, img_5_of_spades, img_6_of_clubs, img_6_of_diamonds, img_6_of_hearts, img_6_of_spades, img_7_of_clubs, img_7_of_diamonds, img_7_of_hearts, img_7_of_spades, img_8_of_clubs, img_8_of_diamonds, img_8_of_hearts, img_8_of_spades, img_9_of_clubs, img_9_of_diamonds, img_9_of_hearts, img_9_of_spades, img_10_of_clubs, img_10_of_diamonds, img_10_of_hearts, img_10_of_spades, img_ace_of_clubs, img_ace_of_diamonds, img_ace_of_hearts, img_ace_of_spades, img_jack_of_clubs, img_jack_of_diamonds, img_jack_of_hearts, img_jack_of_spades, img_queen_of_clubs, img_queen_of_diamonds, img_queen_of_hearts, img_queen_of_spades, img_king_of_clubs, img_king_of_diamonds, img_king_of_hearts, img_king_of_spades
} from './cardsUrlArray'

const deck = [
  { card: 2, suit: img_2_of_clubs }, { card: 2, suit: img_2_of_diamonds }, { card: 2, suit: img_2_of_hearts }, { card: 2, suit: img_2_of_spades }, { card: 3, suit: img_3_of_clubs }, { card: 3, suit: img_3_of_diamonds },
  { card: 3, suit: img_3_of_hearts }, { card: 3, suit: img_3_of_spades }, { card: 4, suit: img_4_of_clubs }, { card: 4, suit: img_4_of_diamonds }, { card: 4, suit: img_4_of_hearts }, { card: 4, suit: img_4_of_spades },
  { card: 5, suit: img_5_of_clubs }, { card: 5, suit: img_5_of_diamonds }, { card: 5, suit: img_5_of_hearts }, { card: 5, suit: img_5_of_spades }, { card: 6, suit: img_6_of_clubs },
  { card: 6, suit: img_6_of_diamonds }, { card: 6, suit: img_6_of_hearts }, { card: 6, suit: img_6_of_spades }, { card: 7, suit: img_7_of_clubs }, { card: 7, suit: img_7_of_diamonds },
  { card: 7, suit: img_7_of_hearts }, { card: 7, suit: img_7_of_spades }, { card: 8, suit: img_8_of_clubs }, { card: 8, suit: img_8_of_diamonds }, { card: 8, suit: img_8_of_hearts },
  { card: 8, suit: img_8_of_spades }, { card: 9, suit: img_9_of_clubs }, { card: 9, suit: img_9_of_diamonds }, { card: 9, suit: img_9_of_hearts }, { card: 9, suit: img_9_of_spades },
  { card: 10, suit: img_10_of_clubs }, { card: 10, suit: img_10_of_diamonds }, { card: 10, suit: img_10_of_hearts }, { card: 10, suit: img_10_of_spades }, { card: 'A', suit: img_ace_of_clubs },
  { card: 'A', suit: img_ace_of_diamonds }, { card: 'A', suit: img_ace_of_hearts }, { card: 'A', suit: img_ace_of_spades }, { card: 'J', suit: img_jack_of_clubs }, { card: 'J', suit: img_jack_of_diamonds },
  { card: 'J', suit: img_jack_of_hearts }, { card: 'J', suit: img_jack_of_spades }, { card: 'Q', suit: img_queen_of_clubs }, { card: 'Q', suit: img_queen_of_diamonds }, { card: 'Q', suit: img_queen_of_hearts },
  { card: 'Q', suit: img_queen_of_spades }, { card: 'K', suit: img_king_of_clubs }, { card: 'K', suit: img_king_of_diamonds }, { card: 'K', suit: img_king_of_hearts }, { card: 'K', suit: img_king_of_spades }
];

let scorePlayer = 0;
let scoreDealer = 0;

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
      playerStop: false,
      dealerStop: false


    }
  }


  start = () => {
    let newCard1 = this.newCard()
    let newCard2 = this.newCard()
    let startingScorePlayer = { card: 0 }
    startingScorePlayer.card += newCard1.card + newCard2.card

    this.setState({
      gameStart: true,
      playerCards: [...this.state.playerCards, newCard1, newCard2]
    })
    this.updateScorePlayer(startingScorePlayer)
    console.log('startingScorePlayer send')

  }

  newCardPlayer = () => {
    let newCard1 = this.newCard()
    setTimeout(() => {
      if (this.state.scorePlayer < 21) {
        this.setState({ playerCards: [...this.state.playerCards, newCard1] })
        this.updateScorePlayer(newCard1)
      }
    }, 500);
  }

  newCardDealer = () => {
    let newCard1 = this.newCard()
    setTimeout(() => {
      if (this.state.scoreDealer <= 17) {
        this.setState({
          playerStop: true,
          dealerCards: [...this.state.dealerCards, newCard1]
        })
        this.updateScoreDealer(newCard1)
      }
    }, 500);

    if (this.state.scoreDealer > 17) {
      this.setState({ dealerStop: true })
      setTimeout(() => {
        this.setState({ gameEnd: true })
      }, 5000);
    }
  }
  updateScorePlayer = (value) => {

    if (this.state.scorePlayer > 21) {
      setTimeout(() => {
        this.setState({ playerStop: true, dealerStop: true, gameEnd: true })
      }, 5000);
    } else {

      setTimeout(() => {
        this.setState({ scorePlayer: scorePlayer += value.card })
        console.log('player score update')
        this.checkingScores()
      }, 3000);
    }
  }

  updateScoreDealer = (value) => {
    setTimeout(() => {
      this.setState({ scoreDealer: scoreDealer += value.card })
      console.log('dealer score update')
      this.checkingScores()
    }, 3000);

  }

  checkingScores = () => {


    if (!this.state.playerStop && this.state.scorePlayer === 21) {
      setTimeout(() => {
        this.setState({ playerStop: true })
        this.newCardDealer()
      }, 500);
    }
    if (!this.state.playerStop && this.state.scorePlayer > 21) {
      setTimeout(() => {
        this.setState({ playerStop: true })
        this.newCardDealer()
      }, 500);
    }

    setTimeout(() => {
      if (this.state.playerStop && this.state.scoreDealer === 21) {
        this.setState({ playerStop: true, dealerStop: true, gameEnd: true })
      }
    }, 5000);
    if (this.state.playerStop && this.state.scoreDealer > 21) {
      setTimeout(() => {
        this.setState({ playerStop: true, dealerStop: true, gameEnd: true })
      }, 5000);
    }
    if (this.state.playerStop && this.state.scoreDealer < 21) {
      this.newCardDealer()
    }


  }
  newCard = () => {
    const randomCards = Math.floor(Math.random() * deck.length);
    switch (deck[randomCards].card) {
      case 'J':
      case 'Q':
      case 'K':
        const dealerHasAs = Object.values(this.state.dealerCards).includes('A')
        const playerHasAs = Object.values(this.state.playerCards).includes('A')
        if ((this.state.scorePlayer + 10 > 21 && !this.state.playerStop && playerHasAs) || (this.state.playerStop && this.state.scoreDealer + 10 > 21 && dealerHasAs) ) {
          deck[randomCards].card = 1
        } else {

          deck[randomCards].card = 10
        }
        break;
      case 'A':
        if ((this.state.scorePlayer + 11) > 21) {
          deck[randomCards].card = 1;
        } else {
          deck[randomCards].card = 11;
        }
        break;

      default:
        break;
    }
    return { card: deck[randomCards].card, suit: deck[randomCards].suit };
  }


  clickContinue = () => {
    this.newCardPlayer()
  }

  clickStop = () => {
    setTimeout(() => {
      
      this.state.scorePlayer <= 21 &&
        this.newCardDealer()
      
    }, 500);
  }

  handleReplay = () => {
    window.location.reload();

  }

  render() {

    return (
      <>

        {
          !this.state.gameStart &&
          <StartingInterface start={this.start} />
        }

        {
          this.state.gameStart &&
          !this.state.gameEnd &&


          <TableInterface

            scorePlayer={this.state.scorePlayer}
            scoreDealer={this.state.scoreDealer}
            playerStop={this.state.playerStop}
            dealerStop={this.state.dealerStop}
            gameEnd={this.state.gameEnd}


            containerPlayer={
              this.state.playerCards.map((card, index) => {
                return <Cards key={index} start={this.start} playerCard={card.suit} />
              })}



            containerDealer={
              this.state.playerStop &&
              this.state.dealerCards.map((card, index) => {
                return <Cards key={index} start={this.start} dealerCard={card.suit} playerStop={this.state.playerStop} />
              })}

            containerButtons={
              !this.state.playerStop &&
              this.state.scorePlayer <= 21 &&

              <Button gameStart={this.state.gameStart} clickContinue={this.clickContinue} clickStop={this.clickStop} playerStop={this.state.playerStop} />
            }

          />
        }

        {this.state.gameEnd &&


          <ReplayInterface replay={this.handleReplay} />

        }


      </>
    )
  }
}

export default App
