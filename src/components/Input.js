
import React,{Component} from 'react'



class Input extends Component {
    constructor(props,context){
        super(props,context)

        this.state = {
            value:""
        }
    }
    render() {
        let style = {width:"100%",height:"30px",fontSize:"30px"}
        return (
            <div>
                <input
                    style={style}
                    value={this.state.value}
                    onChange={this.changeHandler.bind(this)}
                    onKeyUp={this.keyUpHandler.bind(this)}
                />
            </div>
        );
    }

    changeHandler(e){

        // 同步数据
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandler(e){
        const value = this.state.value
        if(e.keyCode===13&&value.trim()){
            this.props.submitFn(value)

            // 回车后情况input值
            this.setState({
                value:""
            })
        }
    }
}


export default Input