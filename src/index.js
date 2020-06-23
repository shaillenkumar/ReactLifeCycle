import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';

export default class App extends Component {
  state = { showCounterApp: false };
  render() {
    let output = null;
        if(this.state.showCounterApp===true){
            output = <CounterApp title = "Counter app v1.0"/>
        }
    return (
      <div className="Container">
          <h1 className="alert alert-info">Component LifeCycle Demo</h1>
          <hr/>
          <button className="btn btn-primary" onClick={()=>{
            this.setState({showCounterApp: !this.state.showCounterApp})
          }}>Hide/Show Counter App</button>
            {output}
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
