
import React from 'react';
import {Alert} from 'react-bootstrap';
import PropTypes from 'prop-types'
export default class HeadAlert extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <Alert className={this.props.class} bsStyle={this.props.type} onDismiss={this.props.close}>
                {this.props.title && <h4>{this.props.title}</h4>}
                {this.props.content && <p>{this.props.content}</p>}
            </Alert>
        )
    }
}
HeadAlert.defaultProps = {
    show: false,
    close: ()=>{},
    type: 'info',
    title: '',
    content: '',
    class: ''
};
HeadAlert.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
    type: PropTypes.oneOf(['success','warning','danger','info']),
    title: PropTypes.string,
    content: PropTypes.string,
    class: PropTypes.string
};