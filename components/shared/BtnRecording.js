import React, { Component } from 'react'
import { connect } from 'react-redux';
import { stopRecording, startRecording } from '../../statemanagement/app/AppStateManagement';

class BtnRecording extends Component {

  handleClick() {
    if(this.props.recordingStatus.isRecording) {
      this.props.dispatch(stopRecording())
    } else {
      this.props.dispatch(startRecording())
    }
  }

  render() {
    return (
      <div className="btn-record-container">
        <div
          className="btn-record"
          onClick={() => this.handleClick()}
        >
          {this.props.recordingStatus.isRecording &&
            <>
              <img src="/static/icons/icon-stop-recording.svg" />
              <h3 className="btn-record-label text-default">Stop recording</h3>
            </>
          }
          {!this.props.recordingStatus.isRecording &&
            <>
              <img src="/static/icons/icon-start-recording.svg" />
              <h3 className="btn-record-label text-default">Start recording</h3>
            </>
          }
        </div>
        <style jsx>{`

          .btn-record-container {
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
          }

          .btn-record {
            position: relative;
            text-align: center;
            z-index: 2;
            cursor: pointer;
          }
      
          .btn-record-label {
            margin-top: 0.5rem;
            text-shadow: 0px 2px 4px rgba(73, 73, 73, 0.5);
          }
        `}</style>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    recordingStatus: state.app.get('recordingStatus').toJS(),
    mode: state.app.get('mode')
  }
})(BtnRecording)