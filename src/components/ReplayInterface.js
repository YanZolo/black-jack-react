import React, { Component } from 'react';

class ReplayInterface extends Component {
    render() {
        return (
            <div className="replay-interface">
                <button className="btn btn-outline-light button-replay bg-primary text-light " onClick={this.props.replay}>Replay</button>
            </div>
        );
    }
}

export default ReplayInterface;