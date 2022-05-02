import React, { Component } from 'react';
import { getAbsDifference, Hypotenuse } from './Calculations';

export class Calculator extends Component {
    static displayName = Calculator.name;

    constructor(props) {
        super(props);
        console.log("Calculator.constructor");

        this.state = {
            //hypotenuse: 0.0,
            x1: 0.0, x2: 0.0, y1: 0.0, y2: 0.0, x_dist: 0.0, y_dist: 0.0,
            loading: true,
        };

        // Bind handlers
        this.onX1Changed = this.onX1Changed.bind(this);
        this.onX2Changed = this.onX2Changed.bind(this);
        this.onXDistChanged = this.onXDistChanged.bind(this)
        
        this.onY1Changed = this.onY1Changed.bind(this);
        this.onY2Changed = this.onY2Changed.bind(this);
        this.onYDistChanged = this.onYDistChanged.bind(this);

        this.tryCalculate = this.tryCalculate.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    componentDidMount() {        
        console.log("Calculator.componentDidMount");
        this.setState({loading: false});
    }

    onX1Changed(event) {
        console.log("Calculator.onX1Changed");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing x1 value to: " + num.toString());
        }
        this.setState({ x1: num });

        this.tryCalculate(); 
    }
    onX2Changed(event) {
        console.log("Calculator.onX2Changed");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing x2 value to: " + num.toString());
        }
        this.setState({ x2: num });

        this.tryCalculate(); 
    }
    onXDistChanged(event) {
        console.log("Calculator.onXDistChanged");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing xdist value to: " + num.toString());
        }
        this.setState({ x_dist: num });

        this.tryCalculate(); 
    }
    onY1Changed(event) {
        console.log("Calculator.onY1Changed");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing y1 value to: " + num.toString());
        }
        this.setState({ y1: num });

        this.tryCalculate(); 
    }
    onY2Changed(event) {
        console.log("Calculator.onY2Changed");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing y2 value to: " + num.toString());
        }
        this.setState({ y2: num });

        this.tryCalculate(); 
    }
    onYDistChanged(event) {
        console.log("Calculator.onYDistChanged");
        var num = parseFloat(event.target.value);
        if (!num) { num = 0.0; }
        else {
            console.log("Changing ydist value to: " + num.toString());
        }
        this.setState({ y_dist: num });

        this.tryCalculate(); 
    }

    tryCalculate() {
        console.log("Calculator.tryCalculate");

        var hypo = new Hypotenuse(this.state.x1, this.state.x2, this.state.y1, this.state.y2); 

        if (this.state.x_dist !== 0.0) {
            hypo.x1 = 0.0; 
            hypo.x2 = this.state.x_dist; 
        }
        if (this.state.y_dist !== 0.0) {
            hypo.y1 = 0.0; 
            hypo.y2 = this.state.y_dist; 
        }
        
        var dist = hypo.GetHypotenuse(); 

        return dist; 
    }

    resetClick() {
        console.log("Calculator.resetClick");
        this.setState({
            x1: 0.0,
            x2: 0.0,
            y1: 0.0,
            y2: 0.0,
            x_dist: 0.0,
            y_dist: 0.0,
            hypotenuse: 0.0
        });
    }

    renderDistanceForm() {
        console.log("Calculator.renderDistanceForm");
        return (            
            <div className='container-fluid justify-content-center'>
                <div>
                    <form onSubmit={this.handleSubmit} onReset={this.resetClick}>

                        <div className="row">
                            <div className="col">
                                <div className="mx-3">
                                    <label className="form-label">a-coordinate 1: { (this.state.x1 !== 0) ? this.state.x1 : "" }</label>
                                    <input type="text" className="form-control" id="x1_input" disabled={this.state.x_dist !== 0} onChange={this.onX1Changed}></input>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mx-3">
                                    <label className="form-label">a-coordinate 2: {(this.state.x2 !== 0) ? this.state.x2 : "" }</label>
                                    <input type="text" className="form-control" id="x2_input" disabled={this.state.x_dist !== 0} onChange={this.onX2Changed}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="m-3">
                                    <label className="form-label">a-length: {(this.state.x_dist !== 0) ? this.state.x_dist : "" }</label>
                                    <input type="text" className="form-control" id="xdist_input" disabled={this.state.x1 !== 0 && this.state.x2 !== 0} onChange={this.onXDistChanged}></input>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <div className="mx-3">
                                    <label className="form-label">b-coordinate 1: {(this.state.y1 !== 0) ? this.state.y1 : "" }</label>
                                    <input type="text" className="form-control" id="y1_input" disabled={this.state.y_dist !== 0} onChange={this.onY1Changed}></input>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mx-3">
                                    <label className="form-label">b-coordinate 2: {(this.state.y2 !== 0) ? this.state.y2 : "" }</label>
                                    <input type="text" className="form-control" id="y2_input" disabled={this.state.y_dist !== 0} onChange={this.onY2Changed}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="m-3">
                                    <label className="form-label">b-length: {(this.state.y_dist !== 0) ? this.state.y_dist : "" }</label>
                                    <input type="text" className="form-control" id="ydist_input" disabled={this.state.y1 !== 0 && this.state.y2 !== 0} onChange={this.onYDistChanged}></input>
                                </div>
                            </div>
                        </div>

                        <br></br>

                        <div>
                            <button type="reset" className="btn btn-danger m3">Reset</button>
                        </div>                        
                    </form>
                </div>
             </div>
        );
    }

    render() {
        console.log("Calculator.render");

        let distanceForm = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderDistanceForm();

        return (
            <div className="container-fluid">
                <div className='m-5'>
                    <div className='justify-content-center text-center'>
                        <h1>Hypotenuse: {this.tryCalculate()} </h1>
                        <br></br>
                        {distanceForm}
                    </div>
                </div>
            </div>
        );
    }

}
