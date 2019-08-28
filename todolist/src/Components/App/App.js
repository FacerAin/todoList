import React from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm'
import TodoCardList from '../TodoCardList/TodoCardList'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      TodoCardList: [{num:1,title: 'test1'}]
    }
    this.inputTodo = this.inputTodo.bind(this)
  }
  inputTodo(title){
    const todolist = this.state.TodoCardList
    let todolen = Object.keys(todolist).length
    let todo = {
      num : todolen+1,
      title: title
    }
    todolist.push(todo)
    this.setState({TodoCardList: todolist})
    console.log(this.state.TodoCardList)
  }
  render(){
  return (
    <div>
      <div className="App">
      <h1>todoList</h1>
        <InputForm inputTodo={this.inputTodo}/>
        <TodoCardList todocardlist={this.state.TodoCardList}/>
      </div>
    </div>
  );
  }
}

export default App;
