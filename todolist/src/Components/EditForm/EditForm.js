import $ from 'jquery' 
import React from 'react';
import './EditForm.css';
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';

class EditFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
            date: new Date(),
            title: '',
            description: '',
            num: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }
    componentDidUpdate(){
        if(this.state.num !== this.props.todo[0].num){
        this.setState({
            num: this.props.todo[0].num,
            date: this.props.todo[0].date,
            title: this.props.todo[0].title,
            description: this.props.todo[0].description
        })
        console.log("Mount")
        console.log(this.state)
    }
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
    handleSubmit(event){
        if(this.state.title){
            this.props.editTodo(this.state)
            }
            event.preventDefault()
           this.props.onClose()
    }

    render(){
        return(
            <div>
                <form className="InputForm" onSubmit={this.handleSubmit}>
                <div className="InputForm-fields">
                    <TextField id="title-textarea" value={this.state.title} required label="제목" margin="normal" name='title' onChange={this.handleTitleChange}/>
                    <TextField id="description-textarea" value={this.state.description} label="설명" margin="normal" name='description' onChange={this.handleDescriptionChange}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker id="datepicker-area" value={this.state.date} variant="inline" format="yyyy/MM/dd" name='date' onChange={this.handleDateChange} />
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

export default EditFrom