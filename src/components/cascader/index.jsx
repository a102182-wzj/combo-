import React, { Component, Fragment } from 'react';
import { Cascader } from 'antd';
import index from './index.less'
class Casccader1 extends Component {
    onChange(value) {
      }
    render() {
        let options = [
            {
                value:'河马儿科总店',
                label:'河马儿科总店',
                children:[
                    {
                        value:'儿童普通门诊',
                        label:'儿童普通门诊',
                    }
                ]
            }
        ];
        return (
            <div style={{marginRight:20}}>
            <Cascader  options={options} onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}
export default Casccader1