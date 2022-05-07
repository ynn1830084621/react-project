import React, { Component } from 'react';
import cat from './images/cat.png'

class Mouse extends Component {
  //鼠标位置
  state = { 
    x: 0,
    y: 0
  }
  //鼠标移动的事件处理程序
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  //监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  //组件卸载移除事件绑定
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  render() { 
    return this.props.children(this.state);
  }
}

class App extends Component {
  render() { 
    return ( 
      <div>
        <h1>render props 模式</h1>
        <Mouse> 
          {
            (mouse) => {
              return <p>鼠标位置: {mouse.x} {mouse.y}</p>
            }
          }
        </Mouse>
        <Mouse>
          {
            mouse => {
              return <img src={cat} alt='猫' width={100}
                          style={{position: 'absolute', top: mouse.y-50, left: mouse.x-50}} 
                      />
            }   
          }
        </Mouse>
      </div>
    );
  }
}

export default App;
