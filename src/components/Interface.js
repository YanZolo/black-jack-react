import React from 'react'

const Interface = (props) => {

    return (
        <>
            <div className="container-principal">

                <div className="score-container">
                    <p>Score Joueur: {props.scorePlayer}</p>
                    <p>Score Dealer: {props.scoreDealer}</p>
                </div>

                <div className="result-container">

                    {props.scorePlayer > 21 &&
                        <p>YOU LOOSE 😂</p>}

                    {props.scorePlayer === 21 &&
                        <p>BLACK JACK 😍</p>}

                    {props.scorePlayer === 21 &&
                        props.scoreDealer === 21 &&
                        <p>DRAW 🤔</p>}

                    {props.scorePlayer === props.scoreDealer &&
                        props.scorePlayer !== 21 &&
                        <p>DRAW 🤔</p>}

                    {props.playerStop &&
                        props.scorePlayer < props.scoreDealer &&
                        props.scoreDealer <= 21 &&
                        <p> YOU LOOSE 😂</p>}

                    {props.playerStop &&
                        props.gameEnd &&
                        props.scorePlayer <= 21 &&
                        props.scoreDealer > 21 &&
                        <p> YOU win 😎</p>}

                    {props.playerStop &&
                        props.gameEnd &&
                        props.scorePlayer <= 21 &&
                        props.scoreDealer < props.scorePlayer &&
                        <p> YOU win 😎</p>}
                </div>
                <div className='container-table d-flex justify-content-evenly '>
                    <div className=' table-player  fs-1 p-5   '>{props.containerPlayer}</div>

                    <div className='table-button text-center position-absolute top-25 start-50 translate-middle'>{props.containerButtons}
                    </div>

                    <div className='table-dealer fs-1  p-5  '>{props.containerDealer}</div>
                </div>
            </div>
        </>
    )
}

export default Interface