import React, {Componet} from "react"
// import React from "react";
// const Componet = React.Component/ 

class App extends Componet{
  render(){
    return (
      <ul className = 'my-list'>
        {/* <li>React</li> */}
        <li>{true ? 'React' : '框架'}</li>
        <li>JS</li>
      </ul>
      //var child1 = React.createElement('li', null, 'React');
      //var child2 = React.createElement('li', null, 'JS');
      //var root = React.createElement('ul', {className: 'my-list'},child1, child2);
    )
  }
}

export default App;
