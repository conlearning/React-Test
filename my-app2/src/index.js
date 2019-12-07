import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React.

class InputNumber extends React.Component {
    render(){
        return(
            <input value={this.props.value} placeholder={this.props.defaultValue} onChange={this.props.onChange} />
        )
    }
}

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
  