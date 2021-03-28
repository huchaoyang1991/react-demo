import axios from 'axios';
import React, { Component } from 'react';
import './style.less';
export default class Search extends Component {

    search = () => {
        console.log(this.ele.value)
        const keyWord = this.ele.value
        axios.get('https://api.github.com/search/users', {
            params: {
                q: keyWord
            }
        }).then(
            response => {
                this.props.saveUsers(response.data.items)
            },
            error => { console.log('失败了', error) }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.ele = c} type="text" placeholder="输入关键字搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
