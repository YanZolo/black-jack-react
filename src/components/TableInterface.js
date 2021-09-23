import React from 'react'

class TableInterface extends React.Component {

    render() {

        return (
            <>

                <div className='container-principal'>

                    <div className='score-container display-flex  flex-evenly'>
                        <p className=' score-player p-2 '>Score Joueur :<span>{this.props.scorePlayer}</span></p>
                        <div className='result-container text-danger mt-5 align-self-end'>

                            {this.props.scorePlayer > 21 &&
                                <p>YOU LOOSE</p>}



                            {this.props.scorePlayer === 21 &&
                                <p>BLACK JACK</p>}

                            {this.props.scorePlayer !== 21 &&
                                this.props.scoreDealer === 21 &&
                                <p>BLACK JACK</p>}

                            {this.props.playerStop &&
                                this.props.dealerStop &&
                                this.props.scorePlayer === 21 &&
                                this.props.scoreDealer === 21 &&
                                <p>DRAW BLACK JACK</p>}

                            {this.props.playerStop &&
                                this.props.dealerStop &&
                                this.props.scorePlayer === this.props.scoreDealer &&
                                this.props.scorePlayer < 21 &&
                                this.props.dealerStop > 0 &&
                                <p>DRAW</p>}

                            {this.props.playerStop &&
                                this.props.dealerStop &&
                                this.props.scorePlayer < this.props.scoreDealer &&
                                this.props.scoreDealer <= 21 &&
                                <p> YOU LOOSE</p>}

                            {this.props.playerStop &&
                                this.props.dealerStop &&
                                this.props.scorePlayer <= 21 &&
                                this.props.scoreDealer > 21 &&
                                <p> YOU win</p>}

                            {this.props.playerStop &&
                                this.props.dealerStop &&
                                this.props.scorePlayer <= 21 &&
                                this.props.scoreDealer < this.props.scorePlayer &&
                                <p> YOU win</p>}

                        </div>
                        <p className=' score-dealer p-2 '>Score Dealer : <span>{this.props.scoreDealer}</span>
                        </p>
                    </div>

                    <div className='container-table '>
                        <div className=' table-left-player display-flex '>{this.props.containerPlayer}</div>
                        <div className='table-middle-button text-center '>{this.props.containerButtons}</div>
                        <div className='table-right-dealer display-flex  '>{this.props.containerDealer}</div>
                    </div>

                </div>


            </>
        )
    }
}

export default TableInterface