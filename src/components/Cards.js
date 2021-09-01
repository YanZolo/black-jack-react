import React, { Component } from 'react'
import '../App.css'

class Cards extends Component {
    render() {
        return (
            <div className="container-table-cards">

                <div className='player card card-img'>
                    {this.props.playerCard}
                </div>

                <div className='player card card-img'>
                    {this.props.dealerCard}
                </div>

            </div >
        )
    }
}
export default Cards