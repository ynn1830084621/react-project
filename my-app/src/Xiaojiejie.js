import React,{Component, Fragment} from "react";
import axios from 'axios'
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from "./Boss";
import {CSSTransition, TransitionGroup} from "react-transition-group"

class Xiaojiejie extends Component{
    //生命周期函数指在某一个时刻组件会自动调用执行的函数

    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:['基础按摩', '精油推背']
        }
    }

    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda/')
            .then((res) => {console.log('axios获取数据成功' + JSON.stringify(res));})
            .catch((error) => {console.log('axios获取数据失败' + error);})
    }
    // componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻');
    // }
    // componentDidMount() {
    //     console.log('componentDidMount----组件挂载完成的时刻执行');
    // }
    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate');
    //     return true;
    // }
    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate');
    // }
    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate');
    // }
    render(){
        //console.log('3-render----组件加载中');
        return (
            //<div>
            <Fragment>
                <div>
                    <label htmlFor="js">增加服务：</label>
                    <input 
                        id = 'js' 
                        className = "input" 
                        value = {this.state.inputValue} 
                        onChange = {this.inputChange.bind(this)}
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                // <li 
                                // key = {item + index}
                                // onClick = {this.deleteItem.bind(this,index)}
                                // dangerouslySetInnerHTML = {{__html : item}}
                                // >
                                //     {/* {item} */}
                                // </li>
                                <CSSTransition
                                    timeout = {2000}
                                    classNames = 'boss-text'
                                    unmountOnExit
                                    appear = {true}
                                    key = {index + item}
                                >
                                    <   XiaojiejieItem 
                                        key = {item + index}
                                        content = {item}
                                    // avname = "某某"
                                        index = {index}
                                        deleteItem = {this.deleteItem.bind(this)}

                                    />
                                </CSSTransition>    
                                
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
            //</div>
        )
    }
    inputChange() {
        //console.log(this);
        //console.log(e.target.value);
        //this.state.inputValue = e.target.value;（错误）
        this.setState({
            inputValue : this.input.value
        })

    }
    //增加服务选项
    addList() {
        this.setState({
            list : [...this.state.list, this.state.inputValue]
        },() => {
            //console.log(this.ul.querySelectorAll('div').length);
        })

    }
    //删除单数服务
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index,1)
        //list.state.list.splice(index,1)(错误写法)
        this.setState({
            list : list
        })
    }
}
export default Xiaojiejie