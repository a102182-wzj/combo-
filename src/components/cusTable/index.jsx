import React, { Component, Fragment } from 'react';
import { Button} from 'antd';
import index from './index.less'
import PopoverCus from '../popover/index'
import Datepicker from '../datePicker/index'
import Cascader from '../cascader/index'
import Table from '../../components/table/index'
import * as change from '../../utils/conversion'

import { connect } from 'dva'
//这个是使用原生html画的 用于浮层table
const moment = require('moment')
class CusTab extends Component {

    render() {
    
        let startDate = this.props.startDate
        let temporaryDate = moment(startDate)
        let ths = ['']
        let th = '';
        let tdsAm = [''];
        let tdsPm = ['']
        let td = ''
        for (let i = 0; i < 8; i++) {
            if (i == 0) {
                th = <th className={index.firstTh}>
                </th>
                ths.push(th)
                continue;
            } else {
                th = <th className={index.otherTh}>
                    <div style={{ fontSize: 20 }}>{'周' + change.changeNumberToChinese(temporaryDate.isoWeekday())}</div>
                    <div style={{ color: '#999' }}>{temporaryDate.format('YYYY-MM-DD')} </div>
                </th>

                td = <td className={index.otehrTd}>
                    <div className={index.tdDiv}></div>
                    <div classNmae={index.divButton}> <span className={index.span}></span>
                     <PopoverCus></PopoverCus>
                    </div>

                </td>

            }
            tdsAm.push(td)
            tdsPm.push(td)
            // tdsPm.push(td)
            ths.push(th)
            temporaryDate.add(1, 'days')
        }

        return (
            <div className={index.tableDiv}>
                <table className={index.table} border='1px' >
                    <tr>   {ths.map((item, index) => {
                        return item
                    })}</tr>

                    <tr className={index.Tr}>
                        <td className={index.firstTd}>上午<br></br>09:00<br></br>-<br></br>11:30</td>
                        {tdsAm.map((item, index) => {
                            return item
                        })}
                    </tr>
                    <tr className={index.Tr}>
                        <td className={index.firstTd}>下午<br></br>13:00<br></br>-<br></br>18.:00</td>
                        {tdsPm.map((item, index) => {
                            return item
                        })}
                    </tr>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { startDate, endDate, nowDate } = state.clinicAppointmentModels;
    return {
        startDate, endDate, nowDate
    };
};
export default connect(mapStateToProps)(CusTab)