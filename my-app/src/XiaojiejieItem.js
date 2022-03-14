import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
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