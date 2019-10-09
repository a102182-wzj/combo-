import React, { Component, Fragment } from 'react';
import { DatePicker, Button, Icon } from 'antd';
import index from './index.less';
import { connect } from 'dva';
import * as change from '../../utils/conversion'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const moment = require('moment')
class Datepicker extends Component {
    state = {
        startDate: '',
        endDate: '',
        dateNow: '',
        dateForDate: '',
    }
    onFocus(e) {

    }
    componentWillMount() {
        let date = new moment()
        this.setState({
            dateNow: date
        })
        this.changeTime(date);

    }
    changeTime(date, dateString = '') {
        let nowWeek = moment(date).isoWeekday()
        let start = moment(date).subtract(nowWeek - 1, 'days')
        let end = moment(date).add(7 - nowWeek, 'days')
        this.setState({
            startDate: start,
            endDate: end,
            dateNow: date
        }, () => {
            let data = {
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                nowDate: this.state.dateNow
            }
            this.props.dispatch({
                type: 'clinicAppointmentModels/setDataDate',
                painent: data
            }, () => {
                console.log('dispatchDone')
            })
        })
    }
    timeLess() {
        if (this.props.datePicker == 'date') {
            let dateNow = this.state.dateNow.subtract(1, 'days');
            this.setState({
                dateNow:dateNow
            })
        } else {
            let start = this.state.startDate.subtract(7, 'days');
            let end = this.state.endDate.subtract(7, 'days');
            this.setState({
                startDate: start,
                endDate: end
            })
        }

    }
    timePass() {
        if (this.props.datePicker == 'date') {
            let dateNow = this.state.dateNow.add(1, 'days');
            this.setState({
                dateNow:dateNow
            })
        } else {
            let start = this.state.startDate.add(7, 'days');
            let end = this.state.endDate.add(7, 'days');
            this.setState({
                startDate: start,
                endDate: end
            })
        }
      
    }
    render() {
        console.log('datePicker', this.props.datePicker)
        return (
            <div >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={index.div1} >
                        <Icon type="left" onClick={this.timeLess.bind(this)} style={{ pointerEvents: 'auto' }} />
                        {this.props.datePicker == 'date' ? this.state.dateNow.format('YYYY年MM月DD日') + '[周' + change.changeNumberToChinese(moment(this.state.dateNow).isoWeekday()) + ']' : this.state.startDate.format('YYYY年MM月DD日') + '-' + this.state.endDate.format('YYYY年MM月DD日')}
                        <Icon type="right" onClick={this.timePass.bind(this)} style={{ pointerEvents: 'auto' }} /></div>
                    <DatePicker id="picker" className={index.picker} onChange={this.changeTime.bind(this)} />

                </div>

            </div>
        )
    }
}

export default connect()(Datepicker);