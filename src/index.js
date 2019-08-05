import React, { Component } from 'react';
import { render } from 'react-dom';
import Stopwatch from './components/Stopwatch';

class App extends Component {
    constructor() {
        super();
        this.state = { startTime: 0, startRecordTime: 0 }
    }

    componentDidMount() {
        this.setState({ startTime: Date.now() });
    }

    onFinishRecording = startRecordTime => {
        this.setState({ startRecordTime: startRecordTime });
    }

    render() {
        return (
            <div className="ui container">
                <br />
                <center>
                    <div class="ui compact segment">
                        <Stopwatch onFinishRecording={this.onFinishRecording} />
                    </div>
                </center>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
);
