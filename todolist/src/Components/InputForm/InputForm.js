import React from 'react';
import './InputForm.css';
import $ from 'jquery' 
class InputFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTitleChange(event){
        this.setState({title: event.target.value})
    }
    handleSubmit(event){
        console.log(`${this.state.title}send`)
        this.props.inputTodo(this.state.title)
        $('.InputForm-fields input').val('')
        event.preventDefault()
    }
    render(){
        return(
            <div className="InputForm">
                <div className="InputForm-fields">
                    <input onChange={this.handleTitleChange} placeholder="할일" />
                </div>
                <div className="InputForm-submit">
                    <a onClick={this.handleSubmit}>추가</a>
                </div>

            </div>
        )
    }
}

export default InputFrom