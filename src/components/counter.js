import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:1,
      list:[0]
    }
  }
  compute=(op)=>{
     let cpt=this.state.counter+1;
     this.setState({
      counter:cpt,
      list:new Array(cpt).fill(0)
     });
  }
  
  render() {
    return (
      <div class="card">
        <div className="card-header">
           <strong>
            {this.props.title}: {this.props.value}
            </strong>
          </div>
        <div className="card-body">
         <img src={this.props.image} width={100} />
        </div>

        <div className="ml-auto">
        <button className="btn btn-primary m-2" onClick={()=>this.compute('+')}>+</button>
        <button className="btn btn-primary m-2" onClick={()=>this.compute('-')}>-</button>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    );
  }
}

export default Counter;