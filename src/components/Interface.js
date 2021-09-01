import React from 'react'

class Interface extends React.Component {



    render() {

        return (
            <>

                <div className="container-principal">

                    <div className="score-container">
                        <p>Score Joueur: {this.props.scorePlayer}</p>
                        <p>Score Dealer: {this.props.scoreDealer}</p>
                    </div>

                    <div className="result-container">

                        {this.props.scorePlayer > 21 &&
                            <p>YOU LOOSE</p>}

                        {this.props.scorePlayer === 21 &&
                            <p>BLACK JACK</p>}

                        {this.props.scorePlayer === 21 &&
                            this.props.scoreDealer === 21 &&

                            <p>DRAW</p>}

                        {this.props.scorePlayer === this.props.scoreDealer &&
                            this.props.scorePlayer !== 21 &&

                            <p>DRAW</p>}


                        {this.props.playerStop &&
                            this.props.scorePlayer < this.props.scoreDealer &&
                            this.props.scoreDealer <= 21 &&
                            <p> YOU LOOSE</p>}

                        {this.props.playerStop &&
                            this.props.gameEnd &&
                            this.props.scorePlayer <= 21 &&
                            this.props.scoreDealer > 21 &&
                            <p> YOU win</p>}

                        {this.props.playerStop &&
                            this.props.gameEnd &&
                            this.props.scorePlayer <= 21 &&
                            this.props.scoreDealer < this.props.scorePlayer &&
                            <p> YOU win</p>}

                    </div>



                    <div className='container-table d-flex justify-content-evenly '>


                        <div className=' table-player bg-primary  fs-1 p-5   '>{this.props.containerPlayer}</div>


                        <div className='table-button text-center position-absolute top-25 start-50 translate-middle'>{this.props.containerButtons}
                        </div>


                        <div className='table-dealer bg-secondary  fs-1  p-5  '>{this.props.containerDealer}</div>


                    </div>

                </div>


            </>
        )
    }
}

export default Interface