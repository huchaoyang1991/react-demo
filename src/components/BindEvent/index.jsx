import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor() {
        super()
        this.state = {
            msg: '哈哈'
        }


    }
    render() {
        return (
            <div>
                <button onClick={() => this.myclick('🐷')}>按钮</button>
                <h3>{this.state.msg}</h3>
                <input type='text' style={{ width: '100%' }} value={this.state.msg} onChange={(e) => this.txtChanged(e)} />

            </div>
        )
    }
    myclick = (arg) => {
        this.setState({
            msg: '123'
        }, function () {
            console.log(this.state.msg)
        })
    }
    txtChanged(e) {
        const newVal = e.target.value
        this.setState({
            msg: newVal
        })
    }
}
