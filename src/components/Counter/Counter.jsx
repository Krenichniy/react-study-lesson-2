import css from './Counter.module.css';
import React, {Component} from 'react';
import { Controls } from './Controls';
// import { LoginButton } from '../Buttons';
class Counter extends Component { 
    static defaultProps = {
        initialValue: 0
    }
    // constructor() {
    //     super()

    //     this.state = {
    //         value:0,
    //     }
    // }
    //this statement babel turns to previous statement
    state = {
        value: this.props.initialValue,
    };
    handleIncrement = () => {
        this.setState((prevState) => {
            return {value: prevState.value + 1 }
        })
        //this is wrong variant
        // this.state.value += 1;
    }
    handleDecrement = () => { 
         this.setState(prevState => ({
            value: prevState.value - 1 })
        )
    }
    render() {
        const { value } = this.state;
        return (
            <div className={css.Counter}>
                <span className={css.CounterValue}>{ value}</span>

                <Controls onDecrement={this.handleDecrement} onIncrement={ this.handleIncrement} />
            </div>
        )
    }
}
export default Counter;
