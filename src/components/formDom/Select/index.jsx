import React, { Component, Fragment } from 'react';
import index from './index.less'
import { Select, Form } from 'antd';
const { Option } = Select
class CusSelect extends Component {

    componentWillMount() {
    }
    handleChange(value,option) {
        let name=this.props.name
        console.log('value',value)
     this.props.allValue(name,value)
    }
    render() {
        let options = this.props.options
        return (
            <div style={{ width: '12vw' }}>
                <Select   showSearch  placeholder='请选择'   onChange={this.handleChange.bind(this)}  >
                    {options != null && options != '' ? options.map((item, index) => {
                        return <Option key={index}  value={item.value}>{item.text}</Option>
                    }) : ''}
                </Select>

            </div>
        )
    }
}

export default CusSelect 