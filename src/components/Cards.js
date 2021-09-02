import React, { Component } from 'react'

class Cards extends Component {


    render() {



        return (


            <div className='container-cards'>
                <div key='player' className='card-player bg-light me-5 border-1 '>
                    {this.props.playerCard}
                </div>
                <div key='dealer' className='card-dealer bg-light me-5 border-1'>
                    {this.props.dealerCard}
                </div>
            </div >



        )
    }
}

export default Cards

// componentDidMount = () => {
//     fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
//         .then(result => result.json())
//         .then(result => console.log(result))
// }