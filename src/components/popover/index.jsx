import React, { Component, Fragment } from 'react';
import { Button, Popover, Checkbox, Row, Col } from 'antd';
import { SearchBar } from 'antd-mobile';

import index from './index.less'
class PopoverCus extends Component {
    render() {

        //     <div style={{ display: 'flex' }} className={index.popoverContent}>

        //     <div className={index.popoverDiv}>123</div>
        //     <div className={index.popoverDiv}>123</div>
        //     <div className={index.popoverDiv}>123</div>
        // </div>




        const popoverTitle = <SearchBar placeholder="Search" maxLength={8} />
        const popoverContent = <Checkbox.Group style={{ width: '20vw' ,textAlign:'center'}} >
            <Row>
                <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="E">E</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
        return (
            <Popover className={index.popover} placement="bottom" title={popoverTitle} content={popoverContent} trigger="click">
                <Button size='small' type="primary" shape="circle" icon="plus" />
            </Popover>
        )
    }
}
export default PopoverCus