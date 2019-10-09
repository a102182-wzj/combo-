import React, { Component, Fragment } from 'react';
import index from './index.less'
import { Table, Divider, Tag } from 'antd';
import $axios from 'axios'
import request from '../../utils/request'
import * as change from '../../utils/conversion'
import { connect } from 'dva';
const moment = require('moment')
//这个使用的是antd的Table
class Tables extends Component {
  state = {
    doctors: [{
      id: '',
      name: '',
      alreadyReserved: '',
      field: ''
    }],
  }
  onFocus(e) {

  }
  initDataColumns() {
    let doctors = this.state.doctors
    let { startDate, endDate, nowDate } = this.props
    let datas = [];
    let temporaryDate = moment(startDate)
    // 从redux中获取当前选择的周，得到周的周一，循环遍历7天，每天+1
    for (let i = 0; i < 14; i++) {
      if (!i % 2 == 0) {
        temporaryDate.add(1, 'days')
      }
      let data
      let bgc = '';
      // console.log('temporaryDate',temporaryDate.weekday())
      // console.log('moment(nowDate)',moment(nowDate).weekday())
      //这里原来判断的是temporaryDate==moment(nowDate),由于某种原因==不走true,则用周.weekday()来判断是否是当前日期
      if (temporaryDate.weekday() == moment(nowDate).weekday()) {
        bgc = '#659AEA';
      }
      for (let i = 0; i < 2; i++) {
        if (i == 0) {
          data = {
            date: <div style={{color:bgc}}>{temporaryDate.format('DD日')+'周' + change.changeNumberToChinese(temporaryDate.isoWeekday())+'   AM'}</div>
          }
          // date: temporaryDate.format('DD日')+'周' + change.changeNumberToChinese(temporaryDate.isoWeekday())+'   AM'

        } else {
          data = {
            date: <div style={{color:bgc}}>{temporaryDate.format('DD日')+'周' + change.changeNumberToChinese(temporaryDate.isoWeekday())+'   PM'}</div>
          }
        }
        datas.push(data)
      }
    }
    let columns = [
      {
        title: '',
        dataIndex: 'date',
        render: (text) => {
          return (
            <div className={index.tdDiv}>{text}</div>
          )
        }
      }
    ]
    if (doctors != null || doctors.length > 0) {
      let colum = {};
      doctors.map((item, index) => {
        colum = {
          title: () => {
            return (<div style={{ textAlign: 'center' }}>
              <div><a>{item.name}</a></div>
              <div>已预约0|儿童发育</div>
            </div>)
          },



          // title: item.name,
          dataIndex: item.id
        }
        columns.push(colum)
      })
    }
    return {
      dataColumns: columns,
      dataDatas: datas
    }
  }
  componentWillMount() {

    request.get('/api/doctorInformation').then(res => {
      this.setState({
        doctors: res.data.doctors
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    let datas = this.initDataColumns()
    return (
      <div className={index.outestLayerDiv}>
        <div className={index.tableDiv}> <Table pagination={{ pageSize: 14 }} columns={datas.dataColumns} dataSource={datas.dataDatas} /></div>
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
export default connect(mapStateToProps)(Tables) 