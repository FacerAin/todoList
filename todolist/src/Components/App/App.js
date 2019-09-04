/*Todo
1.InputForm, TodoCard 디자인 초안
2.InputForm에 캘린더 추가, 캘린더 기능 어떻게 구현?
3. 중요도 표시, 완료 표시 토글 이용
*/
import React from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm'
import TodoCardList from '../TodoCardList/TodoCardList'
import TodoCard from '../TodoCard/TodoCard'
import AddIcon from '@material-ui/icons/Add';
import {Fab} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentNum : 1,
      TodoCardList: [{num:1,title: 'test1',date: new Date(),description:'test Description'}]
    }
    this.inputTodo = this.inputTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }
  inputTodo(state){
    const todolist = this.state.TodoCardList
    let todo = {
      num : this.state.currentNum+1,
      title: state.title,
      date: state.date,
      description: state.description
    }

    todolist.push(todo)
    this.setState({currentNum: this.state.currentNum+1,TodoCardList: todolist})
    console.log(this.state.TodoCardList)
  }
  removeTodo(id){
    const todolist = this.state.TodoCardList
    console.log(todolist)
    this.setState({
      TodoCardList: todolist.filter(todo => todo.num !== id)
    })
    console.log(this.state)
  }
  render(){
  return (
    <div>
      <div className="App">
      <h1>todoList</h1>
        <InputForm inputTodo={this.inputTodo} />
        {
          this.state.TodoCardList.map(todo => {
            return <TodoCard removeTodo={this.removeTodo} id = {todo.num} key = {todo.num} todo = {todo} />
          })
        }
      <Fab color="primary" aria-label="add">
      <AddIcon />
      </Fab>
      
      </div>

    </div>
  );
  }
}

export default App;
