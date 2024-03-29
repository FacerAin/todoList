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
            title: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearHandle = this.clearHandle.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }
    handleDescriptionChange(event){
        this.setState({
            description: event.target.value
        })
    }
    handleDateChange(date){
        this.setState({
            date: date
        })
    }
    clearHandle(){
        $('#title-textarea').val('')
        $('#description-textarea').val('')
        this.setState ({
            title: '',
            date: new Date(),
            description: ''
        })
    }
    handleSubmit(event){
        if(this.state.title){
        this.props.inputTodo(this.state)
        this.clearHandle()
        }
        event.preventDefault()
        this.props.onClose()
    }

    render(){
        return(
            <div>
                <form className="InputForm" onSubmit={this.handleSubmit}>
                <div className="InputForm-fields">
                    <TextField id="title-textarea" required label="제목" margin="normal" name='title' onChange={this.handleTitleChange}/>
                    <TextField id="description-textarea" label="설명" margin="normal" name='description' onChange={this.handleDescriptionChange}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={this.state.date} variant="inline" format="yyyy/MM/dd" name='date' onChange={this.handleDateChange} />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="InputForm-submit">
                    <input id="submitbutton" type="submit" value="추가" />
                </div>
                </form>
            </div>
        )
    }
}

export default InputFrom