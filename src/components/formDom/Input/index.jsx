import React, { Component, Fragment } from 'react';
import index from './index.less'
import {Input } from 'antd';
class CusInput extends Component {
    componentWillMount() {

    }
    render() {

        return (
            <div>
            <Input placeholder={this.props.placeholder}></Input>
            </div>
        )
    }
}

export default CusInput 