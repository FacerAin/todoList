import React from 'react';
import TodoCard from '../TodoCard/TodoCard'

class TodoCardList extends React.Component{
    render(){
        return(
            <div className="TodoCardList">
                {
                    this.props.todocardlist.map(todo => {
                        return <TodoCard id={todo.num} key={todo.num} todo={todo}/>
                    })
                }
            </div>
        )
    }
}

export default TodoCardList