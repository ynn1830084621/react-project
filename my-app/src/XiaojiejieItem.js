import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    //这个组件第一次存在于Dom中，函数是不会被执行的
    //已经存在于Dom中，函数才会被执行
    // componentWillReceiveProps() {
    //     console.log('child - componentWillReceiveProps');
    // }
    // componentWillUnmount() {
    //     console.log('chind - componentWillUnmount');
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() { 
        console.log('child - render');
        return (
            <div onClick = {this.handleClick}>
                {this.props.avname}为你服务- {this.props.content}
            </div>
        );
        }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname : PropTypes.string.isRequired,
    content : PropTypes.string,
    index : PropTypes.number,
    deleteItem : PropTypes.func,

}
 

XiaojiejieItem.defaultProps = {
    avname : "很高兴"
}
export default XiaojiejieItem;