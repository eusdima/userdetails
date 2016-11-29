import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import '../style/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Step1 from './Step1';
import Step2 from './Step2';
import Paper from 'material-ui/Paper';

class App extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return <Step1/>;
          case 1:
            return <Step2/>;
          default:
            return null;
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return (
            <Paper style={{width: '100%', maxWidth: 700, margin: 'auto',padding:20}} zDepth={1}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Step 1</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 2</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                {finished ? 
                    (<div>null</div>
                ) : (
                    <div>
                        <div>{this.getStepContent(stepIndex)}</div>
                        <div style={{marginTop: 12}}>
                            <FlatButton
                              label="Back"
                              disabled={stepIndex === 0}
                              onTouchTap={this.handlePrev}
                              style={{marginRight: 12}}
                            />
                            <RaisedButton
                              label={stepIndex === 2 ? 'Finish' : 'Next'}
                              primary={true}
                              onTouchTap={this.handleNext}
                            />
                        </div>
                    </div>
                )}
                </div>
            </Paper>
            );
    }
}


export default App;
