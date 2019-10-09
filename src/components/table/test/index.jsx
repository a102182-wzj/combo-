import React, { Component, Fragment } from 'react';
import index from './index.less'
import { Table, Divider, Tag } from 'antd';
import $axios from 'axios'
import request from '../../utils/request'
import * as change from '../../utils/conversion'
import { connect } from 'dva';
const moment = require('moment')


// (value, row, index) => {
//   console.log('row',row)
//   console.log(index,value)
//   console.log('renderValue',value)
//   const obj = {
//     children: value,
//     props: {},
//   };
//   if(index%2==0){
//     console.log(index%2)
//     obj.props.rowSpan = 2;
//   }else{
//     console.log(index%2)
//     obj.props.rowSpan = 1
//   }

//   return obj;
// }







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
    // 从redux中获取当前选择的周，得到周的周一，循环遍历7天，每天+1
    for (let i = 0; i < 14; i++) {
      let temporaryDate = moment(startDate)
      temporaryDate.add(i, 'days')
      let data = {
        date: temporaryDate.format('DD日') + '周' + change.changeNumberToChinese(temporaryDate.isoWeekday())
      }
      datas.push(data)
    }
    let columns = [
      {
        title: 'date',
        dataIndex: 'date',
        render: (text)=>{
          return(
            <div>{text}</div>
          )
        }
      }
    ]
    if (doctors != null || doctors.length > 0) {
      let colum = {};
      doctors.map((item, index) => {
        colum = {
          title: item.name,
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
      console.log('information', res.data)
      this.setState({
        doctors: res.data.doctors
      })
    }).catch(err => {
      console.log(err)
    })
    let data = this.props.dispatch({
      type: 'clinicAppointmentModels/getData',
      callback: (res) => {
        console.log('dvaRes', res)
      }
    })
  }

  render() {
    let datas = this.initDataColumns()
    return (
      <div className={index.outestLayerDiv}>
        <div className={index.tableDiv}> <Table  pagination={{pageSize:1000000}} columns={datas.dataColumns} dataSource={datas.dataDatas} /></div>

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