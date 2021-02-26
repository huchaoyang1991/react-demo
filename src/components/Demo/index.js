import React, {Component} from 'react';
import CmtName from '../CmnName';
import './style.css';

// import bootcss from 'bootstrap/dist/css/bootstrap.css'

class Demo extends Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                {id: 1, user: '张三', content: '哈哈，沙发'},
                {id: 2, user: '李四', content: '哈哈，板凳'},
                {id: 3, user: '王五', content: '哈哈，凉席'},
                {id: 4, user: '赵六', content: '哈哈，砖头'}
            ]
        }
    }

    render() {
        return (
            <div className="abc">

                <h1 className="title">这是评论列表组件</h1>
                <button className="btn-primary">按钮</button>
                {this.state.CommentList.map(item => <CmtName {...item} key={item.id}/>)}
            </div>
        )
    }
}

export default Demo;