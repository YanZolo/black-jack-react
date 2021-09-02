import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>



                {!this.props.playerStop &&
                    <div className="container-table-buttons">


                        <button className="button-continue btn-outline-light bg-primary text-light" onClick={this.props.clickContinue}>
                            Continuer
                        </button> <br />

                        <button className="button-stop btn-outline-light bg-danger text-light" onClick={this.props.clickStop}>
                            Stop
                        </button>


                    </div>}



            </>
        )
    }
}

export default Button
