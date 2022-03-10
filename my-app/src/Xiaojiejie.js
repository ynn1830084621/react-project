import React,{Component, Fragment} from "react";
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:['基础按摩', '精油推背']
        }
    }
    render(){
        return (
            //<div>
            <Fragment>
                <div>
                    <label htmlFor="js">增加服务：</label>
                    <input id = 'js' className = "input" value = {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
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
                            
                                <
                                    XiaojiejieItem 
                                    key = {item + index}
                                    content = {item}
                                    index = {index}
                                    deleteItem = {this.deleteItem.bind(this)}

                                />
                            
                            )
                        })
                    }
                </ul>
            </Fragment>
            //</div>
        )
    }
    inputChange(e) {
        //console.log(this);
        //console.log(e.target.value);
        //this.state.inputValue = e.target.value;（错误）
        this.setState({
            inputValue : e.target.value
        })
    }
    //增加服务选项
    addList() {
        this.setState({
            list : [...this.state.list, this.state.inputValue]
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