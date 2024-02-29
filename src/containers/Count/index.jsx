import React, { Component } from 'react'
import {connect } from "react-redux"
import {
    increment,
    decrement,
    incrementAsync
} from "../../redux/actions/count"

import "./index.css"

class Count extends Component {
    increment = () => {
        const {value} = this.selectNum;
        this.props.increment(value*1);
    }
    decrement = () => {
        const {value} = this.selectNum;
        this.props.decrement(value*1);
    }
    incrementIfOdd = () => {
        const {value} = this.selectNum;
        if(this.props.count % 2 !== 0){
            this.props.increment(value*1);
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum;
        this.props.incrementAsync(value*1, 1000);
    }
    render() {
        return (
            <div>
                <h2>我是Count组件，下方组件人数总数为：{this.props.totalPerson}</h2>
                <h4>当前求和为: {this.props.count}</h4>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


export default connect(
    state => ({
        count: state.count,
        totalPerson: state.persons.length
    }), 
    // mapDispatchToProps的对象写法：react-redux帮我们自动dispatch【推荐】
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)