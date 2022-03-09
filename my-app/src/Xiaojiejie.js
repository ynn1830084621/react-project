import React,{Component, Fragment} from "react";

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
                    <input value = {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                            <li 
                            key = {item + index}
                            onClick = {this.deleteIndex.bind(this,index)}
                            >
                                {item}
                            </li>
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
    deleteIndex(index) {
        let list = this.state.list;
        list.splice(index,1)
        //list.state.list.splice(index,1)(错误写法)
        this.setState({
            list : list
        })
    }
}
export default Xiaojiejie