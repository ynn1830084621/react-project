import React, { Component } from 'react';
import Cat from './images/cat.png';

function withMouse(WrappedComponent) {
    //类组件提供复用的逻辑和组件
    class Mouse extends Component {
        state = { 
            x: 0,
            y: 0
        }
        handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }
        //渲染参数组件
        render() { 
            console.log('render', this.props);
            return <WrappedComponent  {...this.state} {...this.props} ></WrappedComponent>
        }
    }
    //设置displayName
    Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`
    return Mouse
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'component';
}

//要增强的组件
const Position = props => {
    console.log('position', props);
    return (<p>鼠标位置为：(x: {props.x}, y: {props.y}) </p>)
}
const Image = props => {
    return (
            <img src={Cat} alt='猫' width={100}
                style={{position: 'absolute', top: props.y-50, left: props.x-50 }} 
            />
            )
}
//调用高阶组件，传入要增强的组件
const MousePosition = withMouse(Position);
const MouseImage = withMouse(Image);


class Hoc extends Component {
    render() { 
        return ( 
            <div>
                <h1>高阶组件</h1>
                {/* 渲染增强后组件 */}
                <MousePosition a='1' />
                <MouseImage />
            </div>
        );
    }
}
export default Hoc;






