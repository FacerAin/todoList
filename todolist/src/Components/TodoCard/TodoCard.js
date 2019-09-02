/*Todo
1. D-day 출력 로직 개선
*/
import React from 'react'
import './TodoCard.css'
import { differenceInCalendarDays, format } from 'date-fns'
class TodoCard extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.today = new Date() 
    }
    handleRemove(event){
        const id = this.props.id
        this.props.removeTodo(this.props.id)
    }
    render(){
        console.log('Host todocard')
        console.log(this.today)
        console.log(this.props.todo.date)
        return(
            <div className="TodoCard">
                <div className="Todo-Title">
                    <p>{this.props.todo.title}</p>
                    <p>D{differenceInCalendarDays(this.today,this.props.todo.date)} {format(this.props.todo.date,'M/dd')}</p>
                    <p>{this.props.todo.description}</p>
                </div>
                <a onClick={this.handleRemove}>x</a>

            </div>
        )
    }
}

export default TodoCard