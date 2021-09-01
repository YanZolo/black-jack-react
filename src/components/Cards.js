import React, { Component } from 'react'

class Cards extends Component {


    render() {



        return (


            <div>

                <div className='card'>
                    <div className=' bg-primary card-img '>
                        {this.props.playerCard}
                    </div>
                </div>

                <div className='card'>
                    <div className='bg-secondary card-img '>
                        {this.props.dealerCard}
                    </div>
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