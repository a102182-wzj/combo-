import React, { Component, Fragment } from 'react';
import index from './index.less'
import {DatePicker} from 'antd';
import moment from 'moment';
class CusInput extends Component {
    componentWillMount() {

    }
    onChange(){

    }
    render() {

        return (
            <div>
           <DatePicker onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}

export default CusInput 