import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }
    render() {
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }

    // 提交
    submitFn(value) {
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }

    // 删除函数
    deleteFn(id) {
        let data = this.state.todos
        this.setState({

            // 此处为数组过滤 不懂速查   arr.filter()

            todos: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
}

export default Todo