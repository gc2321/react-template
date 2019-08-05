import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = { isOn: false, startRecordTime: 0, time: 0 }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    resetTimer = event => {
        clearInterval(this.timer);
        this.setState({ isOn: false, time: 0 });

    }

    handleStartRecording = event => {
        this.setState({ isOn: true, startRecordTime: Date.now() });
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.startRecordTime
        }), 1);
    }

    handleStopRecording = event => {
        clearInterval(this.timer);
        this.setState({ isOn: false, time: Date.now() - this.state.startRecordTime });
        this.props.onFinishRecording(this.state.startRecordTime);
    }

    render() {
        const { isOn, time } = this.state;
        const timeInSec = (time / 100) / 10;

        return (
            <div >
                <span class="ui basic label">
                    {timeInSec.toFixed(1)}
                </span>&nbsp;&nbsp;&nbsp;&nbsp;

                {isOn ?
                    <button className='tiny ui red button' onClick={this.handleStopRecording}>Stop</button> :
                    <button className='tiny ui olive button' onClick={this.handleStartRecording}>Start</button>
                }
                {isOn ? null : <button className='tiny ui grey button' onClick={this.resetTimer}>Reset</button>}
            </div>
        )
    }
}

export default Stopwatch;