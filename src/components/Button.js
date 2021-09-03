import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>



                {!this.props.playerStop &&
                    <div className="container-table-buttons">


                        <button className="button-continue " onClick={this.props.clickContinue}>
                            Continuer
                        </button> <br />

                        <button className="button-stop " onClick={this.props.clickStop}>
                            Stop
                        </button>


                    </div>}



            </>
        )
    }
}

export default Button
