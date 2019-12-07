import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React.
class App extends React.Component{
    state = {
        num: 1
    }
    render() {
        return (
            <div>
                sss
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.num)
    }
    componentDidMount() {
        setTimeout(() => {
            console.log('timeout')
        })
        new Promise((resovle) => {
            console.log('before')
            resovle('then')
            console.log('after')
        }).then(res => {
            console.log(res)
        })
        let {num} = this.state
        this.setState({
            num: ++num
        }, () => {
            console.log('after setState')
        })
        console.log('---')
    }
}
export default App

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
  