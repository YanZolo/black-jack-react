import React, { Component } from 'react'
import '../App.css'

class Cards extends Component {
    render() {
        return (


            <div >
                {!this.props.playerStop &&
                <div key='player' className='card-player '>
                <img className='img-fluid' src={this.props.playerCard} alt="player-Cards" />                    
                </div>
                 } 


                {this.props.playerStop && 
                <div key='dealer' className='card-dealer '>
                    <img className='img-fluid' src={ this.props.dealerCard} alt="dearler-Cards" />
                </div>
                } 
            </div >
        )
    }
}
export default Cards