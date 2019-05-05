import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons : [
      {name: "Max", age:28},
      {name: "Manu", age:29},
      {name: "Stephanie", age:26}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Clicked");
    // DONT DO THIS this.state.persons[0].name = "MaxMax";
    this.setState({
        persons : [
          {name: newName, age:38},
          {name: "ManuManu", age:39},
          {name: "Stephanieee", age:36}
        ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
        persons : [
          {name: "Max", age:28},
          {name: event.target.value, age:29},
          {name: "Stephanie", age:26}
        ]
    })
  }

  render(){
    const style = { 
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

   return (
    <div className="App">
      <h1>Hi I am react app</h1>
      <p>This is relly working!</p>
      <button 
      style={style} 
      onClick={()=>this.switchNameHandler("SBBro")}>Switch</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
      click={this.switchNameHandler.bind(this, "SB")}
      change={this.nameChangeHandler}
      />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>         
    
    </div>
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I am react app!!!'))
}
}
export default App;
