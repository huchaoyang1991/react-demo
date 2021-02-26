import React from 'react'
import './style.css'
export default function CmtName(props) {
    return (
        <div className='cmt' key={props.id}>
            <h1 >评论人-{props.user}</h1>
            <p >评论内容-{props.content}</p>
        </div>
    )
}

