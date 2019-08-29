import React from 'react';
import './InputForm.css';
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import $ from 'jquery' 
import moment from 'moment'

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
   /*
   handleTitleChange(event){
       this.setState({
           [event.target.name]: event.target.value
       })
   }
   */
    clearHandle(){
        $('.InputForm-fields input').val('')
        this.setState ({
            title: ''
        })
    }
    handleSubmit(event){
        if(this.state.title){
        this.props.inputTodo(this.state.title)
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
            <div className="InputForm">
                <div className="InputForm-fields">
                    <input name='title' onChange={this.handleTitleChange} placeholder="제목" />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={this.state.date} variant="inline" format="yyyy/MM/dd" name='date' onChange={this.handleDateChange} />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="InputForm-submit">
                    <a onClick={this.handleSubmit}>추가</a>
                </div>
            </div>
        )
    }
}

export default InputFrom