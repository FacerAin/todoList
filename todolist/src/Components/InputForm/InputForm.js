import React from 'react';
import './InputForm.css';

class InputFrom extends React.Component{
    render(){
        return(
            <div className="InputForm">
                <div className="InputForm-fields">
                    <input placeholder="할일" />
                </div>
                <div className="InputForm-submit">
                    <a>추가</a>
                </div>

            </div>
        )
    }
}

export default InputFrom