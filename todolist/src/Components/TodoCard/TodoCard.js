import $ from 'jquery' 
import React from 'react'
import './TodoCard.css'
import { makeStyles } from '@material-ui/core/styles';
import { differenceInCalendarDays, format } from 'date-fns'
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function dayoutput(day){
    if(day>0){
        return "D+"+day
    }else if(day===0){
        return "D-day"
    }else{
        return "D"+day
    }
}
class TodoCard extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleTogglePanel = this.handleTogglePanel.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.today = new Date()
        this.state = {  
            Isopen : false
        }
        
    }
    handleRemove(event){
        event.stopPropagation();
        this.props.removeTodo(this.props.id)
    }
    handleEdit(event){
        event.stopPropagation();
        this.props.handleEdit(this.props.id)
        
    }
    handleTogglePanel(){
        $(this.refs.ToggleMenu).slideToggle('normal')
    }
    handleCheck(event){
        console.log('handleCheck')
        let Iscomplete = (this.props.todo.complete?false:true)
        console.log(Iscomplete)
        this.props.completeTodo(this.props.id,Iscomplete)
        event.stopPropagation();
    }

    render(){
        console.log('Host todocard'+this.props.todo.num)
        console.log("TodoCard"+this.props.todo.complete)

        return(

            <div className="TodoCard" onClick={this.handleTogglePanel}>
                <div className="Container-top">
                    <div className="Check-container">
                        <div onClick={this.handleCheck}>
                            <Checkbox  className="Check"
                    icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                    checkedIcon={<CheckBoxIcon fontSize="large" />}
                    value = {this.props.todo.complete} checked={this.props.todo.complete} inputProps = {
                {'aria-label': 'primary checkbox'}}/></div>
                    </div>

                <div className={`TodoTitle ${this.props.todo.complete && 'complete'}`}>
                    <p>{this.props.todo.title}</p>
                </div>
                <div className="TodoDay">
                <p>{dayoutput(differenceInCalendarDays(this.today,this.props.todo.date))} </p>

                </div>
                </div>
                <div className="ToggleMenu" ref="ToggleMenu">
                <div className="TodoDate">
                   {format(this.props.todo.date,'M/dd')}
                    </div>
                    <div className="TodoDescription">
                         <p>{this.props.todo.description}</p>
                         </div>
                         <a onClick={this.handleEdit}> 수정 </a>
                         |
                <a onClick={this.handleRemove}> 삭제 </a>
                </div>


            </div>
        )
    }
}

export default TodoCard