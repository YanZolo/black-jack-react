import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>



                {!this.props.playerStop &&
                    <div>


                        <button className="btn btn-outline-primary" onClick={this.props.clickContinue}>
                            Continuer
                        </button>

                        <button className="btn btn-outline-danger" onClick={this.props.clickStop}>
                            Stop
                        </button>


                    </div>}



            </>
        )
    }
}

export default Button
