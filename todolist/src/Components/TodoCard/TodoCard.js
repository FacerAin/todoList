import React from 'react'
import './TodoCard.css'

class TodoCard extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(event){
        const id = this.props.id
        this.props.removeTodo(this.props.id)
    }
    render(){
        console.log('Host todocard')
        return(
            <div className="TodoCard">
                <div className="Todo-Title">
                    <p>{this.props.todo.title}</p>
                    <p>{this.props.id}</p>
                </div>
                <a onClick={this.handleRemove}>x</a>

            </div>
        )
    }
}

export default TodoCard