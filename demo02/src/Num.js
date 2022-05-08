import React, { PureComponent } from 'react';

class Num extends PureComponent {
    state = { 
        number: 0
    }
    handleClick = () => {
        this.setState(() => {
            return {
                number: Math.floor(Math.random() * 3)
            }
        })
    }
    // //随机生成数相同时不需要重新渲染
    // shouldComponentUpdate(nextState){
    //     console.log('最新状态：', nextState, '当前状态：', this.state);
    //     return nextState.number !== this.state.number
    //     // if (nextState.number === this.state.number) {
    //     //     return false
    //     // }
    //     // return true
    // }
    render() {
        //console.log('render');
        return ( 
            <div>
                <NumBox number={this.state.number} />
                <button onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}

class NumBox extends PureComponent {
     //随机生成数相同时不需要重新渲染
    // shouldComponentUpdate(nextProps){
    //     console.log('最新props:', nextProps, '当前props:', this.props);
    //     return nextProps.number !== this.props.number
        // if (nextProps.number === this.state.number) {
        //     return false
        // }
        // return true
    // }
    render() { 
        console.log('子组件render' );
        return ( <h1>随机数：{this.props.number}</h1> );
    }
}



export default Num;
