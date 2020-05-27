import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import char from './Char/Char';

class App extends Component {

  state={
    inputText:""
  }
  inputChangeHandler=(event)=>{
    this.setState({inputText:event.target.value})
  }

  deleteCharHandler=(index)=>{
    let chars=this.state.inputText.split('');
    chars.splice(index,1);
    this.setState({inputText:chars.join('')});
  }

  render() {

    const charList=this.state.inputText.split('').map((ch,index)=>{
      return <Char deleteHandler={()=>this.deleteCharHandler(index)} character={ch} key={index}/>;
    })

    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} type="text" value={this.state.inputText}/>
        <p>The length of Input text is :: {this.state.inputText.length} </p>
        <Validation txtLn={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
