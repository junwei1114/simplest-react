import React from 'react'

class List extends React.Component {
    render() {
        const data = this.props.todos

        return (
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                {data.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.text}</li>
                })}
            </ul>
        )
    }


    // 通过自身方法调用父组件的函数deleteFn(通过this.props获取)

    clickHandler(id) {
        this.props.deleteFn(id)
    }
}

export default List