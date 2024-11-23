import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:1,
      list:[0],
    }
  }
  compute = (op) => {
    let newCounter = this.state.counter;
    if (op === '+') {
      newCounter += 1;
    } else if (op === '-' && newCounter > 1) {
      // Ensure counter doesn't go below 1
      newCounter -= 1;
    }

    this.setState({
      counter: newCounter,
      list: new Array(newCounter).fill(0), // Update the list based on the counter
    });
  };
  
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>
            {this.props.title?this.props.title:'Default title'}: {this.props.value}
          </strong>
        </div>
        <div className="card-body">
          <div>
            <strong>Profile: {this.state.counter}</strong>
          </div>
          <div className="card-body">
             {
              this.state.list.map((v,index)=>
                <span>{index} <img width={100} src={this.props.image}/></span>
             )
             }
          </div>
        </div>

        <div className="ml-auto">
          <button
            className="btn btn-primary m-2"
            onClick={() => this.compute('+')}
          >
            +
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => this.compute('-')}
          >
            -
          </button>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    );
  }
}

export default Counter;