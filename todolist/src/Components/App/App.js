import React from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm'

class App extends React.Component{
  render(){
  return (
    <div>
      <div className="App">
      <h1>todoList</h1>
        <InputForm />
        {/*Todo_Card Component */}
      </div>
    </div>
  );
  }
}

export default App;
