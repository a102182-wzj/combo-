import React, { Component, Fragment } from 'react';
import { Button, Radio, Tag, Icon, DatePicker, TimePicker, Form, Menu, Dropdown } from 'antd';
import { SearchBar } from 'antd-mobile';
import index from './index.less'
import Cascader from '../cascader/index'
import { connect } from 'dva'
import $axios from 'axios'
import dynamic from 'umi/dynamic';
const { MonthPicker, RangePicker } = DatePicker;
const moment = require('moment')
class patientAppointment extends Component {

    state = {
        pageForm: [],
        count: 0,
        htmlArray: []
    }
    closeCusModal() {
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelFalse'
        })
    }
    onTimePicker(time, timeString) {
        console.log(time, timeString);
        let endTime = ''
        if (timeString == '11:20') {
            endTime = moment(time).add(10, 'minutes')
        } else {
            endTime = moment(time).add(20, 'minutes')
        }
        console.log('endTime', endTime)
        console.log(moment(time).format('HH:mm') + '-' + moment(endTime).format('HH:mm'))
        let momentTime = moment(moment(time).format('HH:mm') + '-' + moment(endTime).format('HH:mm'))
        console.log()
        console.log('momentTime', momentTime)
        return momentTime
    }
    onNoon(h) {
        console.log('h', h)
        if (h == 11) {
            return [40]
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let values = this.props.form.getFieldsValue()
        console.log('values', values)
    }
    componentWillMount() {
        this.initial()
    }
    initial() {
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log('count',this.state.count)
        // })
        $axios.get('/api/patientAppointment').then(res => {
            console.log('res1', res.data.form)
            let form = res.data.form
            this.setState({
                pageForm: form
            })
            let tmp_form = {}
            let htmlArray = [];
            for (let i = 0; i < form.length; i++) {
                tmp_form[form[i].type] = require('antd/lib/' + form[i].type.toLocaleLowerCase() + '/index')
                let type =form[i].type;
                console.log('type', type)
                console.log(' tmp_form[form[i].type]', tmp_form[form[i].type])
                let attributes = Object.keys(form[i].Attributes)
                let htmlWZJ = <type></type>                                                                                                 
                // let htmlWZJ = '<' + type
                // for (let j = 0; j < attributes.length; j++) {

                //     let key = attributes[j]
                //     let value = form[i].Attributes[attributes[j]]
                //     if (j = attributes.length - 1) {
                //         htmlWZJ += ' ' + key + '=' + value + "></" + type + ">"
                //     } else {
                //         htmlWZJ += ' ' + key + '=' + value
                //     }
                //     console.log('key:' + key, 'value:' + value)
                // }
                htmlArray.push(htmlWZJ)
                console.log('htmlWZJ', htmlWZJ)
            }
            // return htmlArray
            this.setState({
                htmlArray: htmlArray
            }, () => {
                console.log('htmlArray', htmlArray)
            })
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const format = 'HH:mm'
        let momentTime = this.onTimePicker.bind(this)
        let momentNow = moment();
        // if (this.state.htmlArray != null || this.state.htmlArray != '') {
        //     let htmlArray=this.state.htmlArray
        //     for (let i=0;i<htmlArray.length;i++){
        //         console.log('htmlArray[i]',htmlArray[i])
        //        let testHtml= document.getElementById('patientInformation').innerHTML+=htmlArray[i]
        //     //    console.log('testHtml',testHtml)
        //     }
        //     console.log('renderHtmlArray', this.state.htmlArray)
        // }
        // const wzjHtml=this.initial();
        return (
            <div className={index.cusDiv}>
                <div className={index.title}>
                    <div className={index.titleDivLeft}>
                        <div style={{ color: 'white' }}>患者预约</div>
                    </div>
                    <div style={{ color: '#999' }}>* [由父组件传值 name time(YYYY-MM-DD hh:mm-hh:mm)]   林业鑫 2019-09-30 09:20 - 09:40</div>
                    <div className={index.titleDivRight}><a onClick={this.closeCusModal.bind(this)}><Icon type="close" /></a></div>
                </div>
                <div className={index.divContent}>
                    <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                        <div name='预约信息' style={{ display: 'flex' }} >
                            <Form.Item>
                                <Cascader></Cascader>
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('monthPicker', config)(<DatePicker format="YYYY-MM-DD" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('timePicker', config)(<TimePicker minuteStep={20} format={format} onChange={this.onTimePicker.bind(this)} disabledMinutes={this.onNoon.bind(this)} />)}
                                *中午午休为 11:30-13:00 上午末尾预约事件为11:20-11:30
                            </Form.Item>
                            <div >
                                {/* <Form.Item label="预约原因:">
                                    {getFieldDecorator('appointmentReason', {
                                        rules: [{ required: true, message: '请填写你的预约原因' }],
                                    })(
                                        <Input placeholder="预约原因"
                                        />,
                                    )}
                                </Form.Item> */}

                            </div>
                        </div>
                        <div id='patientInformation' name='患者信息' style={{ marginTop: '4%' }}>
                            <div name='搜索框' style={{ width: '20vw' }}>
                                <SearchBar label='搜索' placeholder="姓名/手机号/病案号/会员卡号"></SearchBar>
                            </div>
                            {this.state.htmlArray!=null||this.state.htmlArray!=''?this.state.htmlArray.map((item,index)=>{
                                return item
                            }):''}
                            {/* {wzjHtml} */}
                            {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} name='填写患者信息'>
                                <div>
                                    <Form.Item label="姓名:">
                                        {getFieldDecorator('patientName', {
                                            rules: [{ required: true, message: '请填写姓名' }],
                                        })(
                                            <Input style={{ width: '20vw' }} placeholder="姓名" />,
                                        )}
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label="联系电话:">
                                        {getFieldDecorator('patientName', {
                                            rules: [{ required: true, message: '填写电话号' }],
                                        })(
                                            <Input style={{ width: '20vw' }} placeholder="联系电话" />,
                                        )}
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label="性别:">
                                        {getFieldDecorator('patientName', {
                                            rules: [{ required: true, message: '请填写姓名' }],
                                        })(
                                            <Input style={{ width: '20vw' }} placeholder="姓名" />,
                                        )}
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label="性别:">
                                        {getFieldDecorator('patientName', {
                                            rules: [{ required: true, message: '请填写姓名' }],
                                        })(
                                         
                                        )}
                                    </Form.Item>
                                </div>

                            </div> */}
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                             </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default connect()(Form.create()(patientAppointment))