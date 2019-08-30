/*Todo
*/
import $ from 'jquery' 
import React from 'react';
import './InputForm.css';
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';


class InputFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            title: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearHandle = this.clearHandle.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }
    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }
    clearHandle(){
        $('#title-textarea').val('')
        this.setState ({
            title: '',
            date: new Date()
        })
    }
    handleSubmit(event){
        if(this.state.title){
        this.props.inputTodo(this.state)
        this.clearHandle()
        }
        event.preventDefault()

    }
    handleDateChange(date){
        this.setState({
            date: date
        })

    }
    render(){
        return(
            <div>
                <form className="InputForm" onSubmit={this.handleSubmit}>
                <div className="InputForm-fields">
                    <TextField id="title-textarea" required label="제목" margin="normal" name='title' onChange={this.handleTitleChange}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={this.state.date} variant="inline" format="yyyy/MM/dd" name='date' onChange={this.handleDateChange} />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="InputForm-submit">
                    <input id="submitbutton" type="submit" value="추가"/>
                </div>
                </form>
            </div>
        )
    }
}

export default InputFrom