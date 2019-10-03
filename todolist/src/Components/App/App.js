/*Todo
1.InputForm, TodoCard 디자인 초안
2. 중요도 표시, 완료 표시 토글 이용
3. 수정기능 구현
*/
import React from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm'
import EditForm from '../EditForm/EditForm'
import TodoCard from '../TodoCard/TodoCard'
import AddIcon from '@material-ui/icons/Add';
import {Fab} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      openInput: false,
      openEdit: false,
      currentNum : 1,
      TodoCardList: [{num:1,title: 'test1',date: new Date(),description:'test Description',complete:false}],
      presentTodo: [{num:1,title: 'test1',date: new Date(),description:'test Description',complete:false}]
    }
    
    this.inputTodo = this.inputTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
    this.handleClickOpenInput = this.handleClickOpenInput.bind(this)
    this.handleClickOpenEdit = this.handleClickOpenEdit.bind(this)
    this.handleCloseInput = this.handleCloseInput.bind(this)
    this.handleCloseEdit = this.handleCloseEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  inputTodo(state){
    console.log(this.state)
    const todolist = this.state.TodoCardList
    let todo = {
      num : this.state.currentNum+1,
      title: state.title,
      date: state.date,
      description: state.description,
      complete: false
    }
    todolist.push(todo)
    this.setState({currentNum: this.state.currentNum+1,TodoCardList: todolist})
  }

  editTodo(state){

    const todolist = this.state.TodoCardList
    
    this.setState({
      TodoCardList: todolist.map(todo => todo.num === state.num ? {num:state.num,title: state.title,date: state.date,description:state.description,complete: todo.Iscomplete } : todo)
    })


  }

  removeTodo(id){
    const todolist = this.state.TodoCardList
    this.setState({
      TodoCardList: todolist.filter(todo => todo.num !== id)
    })
  }
  completeTodo(id,Iscomplete){
    const todolist = this.state.TodoCardList
    this.setState({
      TodoCardList: todolist.map(todo => todo.num === id ? {num:todo.num,title: todo.title,date: todo.date,description:todo.description,complete: Iscomplete } : todo)
    })
  }
  handleClickOpenInput(){
    this.setState({openInput:true})
  }
  handleClickOpenEdit(){
    this.setState({openEdit:true})
  }
  handleCloseInput(){
    this.setState({openInput:false})
  }
  handleCloseEdit(){
    this.setState({openEdit:false})
  }
  handleEdit(id){
    const todo = this.state.TodoCardList.filter(todo => todo.num === id)
    console.log("handleEdit")
    this.setState({presentTodo:todo})
    this.handleClickOpenEdit()
    console.log(this.state.presentTodo)

  }

  render(){
  return (
    <div>
      <div className="App">
        {
          this.state.TodoCardList.map(todo => {
            return <TodoCard completeTodo = {this.completeTodo} removeTodo={this.removeTodo} handleEdit = {this.handleEdit} id = {todo.num} todo = {todo} />
          })
        }
      <Fab color="primary" aria-label="add" onClick={this.handleClickOpenInput}>
      <AddIcon />
      </Fab>

      <Dialog
        open={this.state.openInput}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseInput}
      >
            <InputForm inputTodo={this.inputTodo} onClose={this.handleCloseInput}/>
      </Dialog>
      <Dialog
        open={this.state.openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseEdit}
      >
            <EditForm todo={this.state.presentTodo} editTodo={this.editTodo} onClose={this.handleCloseEdit}/>
      </Dialog>
      
      </div>

    </div>
  );
  }
}

export default App;
