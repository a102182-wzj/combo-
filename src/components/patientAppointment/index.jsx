import React, { Component } from 'react';
import { Button, Icon, DatePicker, TimePicker, Form, Select, Input, Upload, message } from 'antd';
import index from './index.less'
import Cascader from '../cascader/index'
import { connect } from 'dva'
import $axios from 'axios'
import loadable from '../../utils/loadable'
const moment = require('moment')
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
class patientAppointment extends Component {

    state = {
        pageForm: [],
        count: 0,
        htmlArray: [],
        from: '',
        allJson: {}
    }
    //关闭浮层
    closeCusModal() {
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelFalse'
        })
    }
    onTimePicker(time, timeString) {
        let endTime = ''
        if (timeString == '11:20') {
            endTime = moment(time).add(10, 'minutes')
        } else {
            endTime = moment(time).add(20, 'minutes')
        }
        let momentTime = moment(moment(time).format('HH:mm') + '-' + moment(endTime).format('HH:mm'))
        return momentTime
    }
    onNoon(h) {
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
    //初始化 获取DOM元素
    initial() {
        $axios.get('/api/patientAppointment').then(res => {
            let form = res.data.form
            this.setState({
                form: form
            })
        })
    }
    allValue(key, value) {
        let allJson = this.state.allJson;
        delete allJson[key]
        allJson[key] = value
        this.setState({
            allJson: allJson
        })
    }
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;








        const { getFieldDecorator } = this.props.form;
        let form = this.state.form
        let htmlArray = [];
        if (form != null && form != '') {
            for (let i = 0; i < form.length; i++) {
                let rules = form[i].rules
                let config = {
                    rules: [
                        { enum: () => { if (!!rules.enum.rule) { return rules.enum.rule } else { return null } }, message: rules.enum.message },
                        { len: () => { if (!!rules.len.rule) { return parseInt(rules.len.rule) } else { return null } }, message: rules.len.message },
                        { max: () => { if (!!rules.max.rule) { return parseInt(rules.max.rule) } else { return null } }, message: rules.max.message },
                        { message: () => { if (!!rules.message.rule) { return rules.message.rule } else { return null } }, message: rules.message.message },
                        { min: () => { if (!!rules.min.rule) { return parseInt(rules.min.rule) } else { return null } }, message: rules.min.message },
                        { pattern: () => { if (!!rules.pattern.rule) { return rules.pattern.rule } else { return null } }, message: rules.pattern.message },
                        { required: () => { if (!!rules.required.rule) { return rules.required.rule } else { return null } }, message: rules.required.message },
                        { transform: () => { if (!!rules.transform.rule) { return rules.transform.rule } else { return null } }, message: rules.transform.message },
                        { type: () => { if (!!rules.type.rule) { return rules.type.rule } else { return null } }, message: rules.type.message },
                        { validator: () => { if (!!rules.validator.rule) { return rules.validator.rule } else { return null } }, message: rules.validator.message },
                        { whitespace: () => { if (!!rules.whitespace.rule) { return rules.whitespace.rule } else { return null } }, message: rules.whitespace.message },
                    ]
                }
                let type = form[i].type;
                //相当于把Select引入进来
                let PredefinedComponent = loadable(() => import(`../../components/formDom/${type}/index.jsx`))
                htmlArray.push(<div style={{ width: '20%', display: 'flex', flexWrap: 'wrap', marginTop: '2%' }}>
                    <Form.Item label={form[i].label}>
                        {getFieldDecorator(form[i].name, config)(<PredefinedComponent name={form[i].name} allValue={this.allValue.bind(this)} key={() => Math.random()} placeholder={form[i].placeholder} options={!!form[i].options ? form[i].options : ''}></PredefinedComponent>)}
                    </Form.Item>

                </div>)
            }
        }
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const format = 'HH:mm'
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
                                {getFieldDecorator('123', config)(<Cascader></Cascader>)}

                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('monthPicker', config)(<DatePicker format="YYYY-MM-DD" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('timePicker', config)(<TimePicker minuteStep={20} format={format} onChange={this.onTimePicker.bind(this)} disabledMinutes={this.onNoon.bind(this)} />)}
                                *中午午休为 11:30-13:00 上午末尾预约事件为11:20-11:30
                            </Form.Item>
                            <div >
                                <Form.Item label="预约原因:">
                                    {getFieldDecorator('appointmentReason', {
                                        rules: [{ required: true, message: '请填写你的预约原因' }],
                                    })(
                                        <Input placeholder="预约原因"
                                        />,
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div style={{height:'15%'}}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </div>
                        <div id='patientInformation' className={index.patientInformationDiv} name='患者信息'>
                            {htmlArray != null && htmlArray != '' ? htmlArray.map((item, index) => {
                                return item
                            }) : ''}
                        </div>
                        <div className={index.formButton}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    保存
                             </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
export default connect()(Form.create()(patientAppointment))