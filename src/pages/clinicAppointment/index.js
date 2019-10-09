import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd';
import FloatDiv from '../../components/floatDiv/index'
import Tab from '../../components/tabs/index'
import index from './index.css'
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styles from './index.css';
import { connect } from 'dva'
const { TabPane } = Tabs;
class ClinicAppointment extends Component {
  state = {

  }
  callback(key) {
  }
  render() {
    return (
      <div className={index.body}>
        {this.props.floatVisibel?  <FloatDiv></FloatDiv>:''}
        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
          <TabPane tab="就诊预约" key="1">
            <Tab></Tab>
          </TabPane>
          <TabPane tab="操作预约" key="2">
            <Tab></Tab>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { startDate, endDate, nowDate, floatVisibel } = state.clinicAppointmentModels;
  return {
    startDate, endDate, nowDate, floatVisibel
  };
};
export default connect(mapStateToProps)(ClinicAppointment)