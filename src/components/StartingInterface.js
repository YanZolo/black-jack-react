import React, { Component } from 'react';

class StartingInterface extends Component {
    render() {
        return (

            <div className="container-start-game">
                <button className="button-start " onClick={this.props.start}>Start game</button>
            </div>

        );
    }
}

export default StartingInterface;