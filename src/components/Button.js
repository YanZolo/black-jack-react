import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>



                {!this.props.playerStop &&
                    <div className="container-table-buttons">


                        <button className="button-continu btn btn-outline-primary" onClick={this.props.clickContinue}>
                            Continuer
                        </button>

                        <button className="button-stop btn btn-outline-danger" onClick={this.props.clickStop}>
                            Stop
                        </button>


                    </div>}



            </>
        )
    }
}

export default Button
