import React, { Component, Fragment } from 'react';
import { Button, Radio, Tag, Icon } from 'antd';
import index from './index.less'
import Datepicker from '../datePicker/index'
import Cascader from '../cascader/index'
import CusTable from '../cusTable/index'
import { connect } from 'dva'
class CusDiv extends Component {

    onFocus(e) {

    }
    showCusModal() {
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelTrue',
            payload:{
                witch:'cusTable'
            }
        })
    }
    closeCusModal(){
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelFalse'
        })  
    }
    render() {

        return (
            <div className={index.cusDiv}>
                <div className={index.title}>
                    <div className={index.titleDivLeft}>
                        <div style={{ color: 'white' }}>排班查询</div>
                    </div>
                    <div style={{ color: '#999' }}>*此页面为临时排班，可前往 排班管理 添加周期排班</div>
                    <div className={index.titleDivRight}><a onClick={this.closeCusModal.bind(this)}><Icon type="close" /></a></div>
                </div>
                <div className={index.divContent}>
                    <div className={index.divContentTitle}>
                        <div style={{ marginLeft: 20, marginTop: 20 }}>
                            <Radio.Group style={{ marginBottom: 8 }}>
                                <Radio.Button value='top' >周视图</Radio.Button>
                                <Radio.Button vaule='left' >列视图</Radio.Button>
                            </Radio.Group>
                            <span>{'   '}</span>
                            <Tag color="gold">周期排班</Tag>
                            <span>{'   '}</span>
                            <Tag color="cyan">临时排班</Tag>
                            <span>{'   '}</span>
                            <Tag color="red">停诊</Tag>
                        </div>
                        <div className={index.datePickerDiv}><Datepicker></Datepicker></div>
                        <div className={index.cascaderDiv}><Cascader></Cascader> <Button type='primary'>新建排班</Button></div>
                    </div>
                    < CusTable></CusTable>
                </div>
            </div>
        )
    }
}
export default connect()(CusDiv) 