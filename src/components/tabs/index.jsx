import React, { Component, Fragment } from 'react';
import { Button, Radio } from 'antd';
import index from './index.less'
import Datepicker from '../datePicker/index'
import Cascader from '../cascader/index'
import Table from '../../components/table/index'
import DateTable from '../dateTable/index'
import { connect } from 'dva'
class Tab extends Component {
    state = {
        datePicker: 'date'
    }
    onFocus(e) {

    }
    changeDatePicker(type) {
        console.log('执行了改变类型')
        this.setState({
            datePicker: type
        }, () => {
            console.log(this.state.datePicker)
        })
    }
    showCusModal() {
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelTrue',
            payload:{
                witch:'cusTable'
            }
        })
    }
    render() {

        return (
            <div >
                <div className={index.tab}>
                    <div className={index.letDiv}>
                        <div style={{ width: '60%'}}><Radio.Group style={{ width: '100%' }} defaultValue="date" buttonStyle="solid">
                            <Radio.Button style={{ width: '50%', textAlign: 'center' }} value="week" onClick={() => { this.changeDatePicker('week') }}>周</Radio.Button>
                            <Radio.Button style={{ width: '50%', textAlign: 'center' }} value="date" onClick={() => { this.changeDatePicker('date') }}>日</Radio.Button>
                        </Radio.Group></div>
                        <div> <Button type="primary" onClick={this.showCusModal.bind(this)} type='default' size='small' >排班</Button></div>
                    </div>
                    <div > 
                        <Datepicker datePicker={this.state.datePicker}></Datepicker>
                    </div>
                    <div >
                        <Cascader></Cascader>
                    </div>
                </div>
                {this.state.datePicker == 'date' ? <DateTable></DateTable> : <Table></Table>}

            </div>
        )
    }
}
export default connect()(Tab)