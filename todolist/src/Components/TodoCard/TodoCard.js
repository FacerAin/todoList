import React from 'react'
import './TodoCard.css'

class TodoCard extends React.Component{
    render(){
        console.log('Host todocard')
        return(
            <div className="TodoCard">
                <div className="Todo-Title">
                    <p>{this.props.todo.title}</p>
                </div>

            </div>
        )
    }
}

export default TodoCard