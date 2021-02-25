import React, { Component } from 'react';
import './style.css';
class Demo extends Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' }
            ]
        }
    }
    render() {        return (
            <div className="aaa">
               
                <h1 className="title">这是评论列表组件</h1>
                {this.state.CommentList.map(item => <div key={item.id}>
                    <h1 >评论人-{item.user}</h1>
                    <p >评论内容-{item.content}</p>
                </div>)}
            </div>
        )
    }
}

export default Demo;