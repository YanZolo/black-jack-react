import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>



                {!this.props.playerStop &&
                    <div className="container-table-buttons">


                        <button className="button-continu btn btn-outline-primary bg-light" onClick={this.props.clickContinue}>
                            Continuer
                        </button>

                        <button className="button-stop btn btn-outline-danger bg-light" onClick={this.props.clickStop}>
                            Stop
                        </button>


                    </div>}



            </>
        )
    }
}

export default Button
