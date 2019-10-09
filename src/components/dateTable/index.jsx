import React, { Component, Fragment } from 'react';
import Datepicker from '../datePicker/index'
import { Modal, Button ,Input} from 'antd';
import { connect } from 'dva'
import $ from 'jquery'
import index from './index.less'
import moment from 'moment'
class DateTable extends Component {
    state = {
        showModal: false,
        clickTime:''
    }
    componentDidMount() {
    }
    onMouseOver(e, index) {
        let test1 = document.getElementById(index)
        //   console.log('test1',$(test1)[0].children[0].style.visibility)
        $(test1)[0].style.visibility = 'visible'
        //   $(test1).prev().prevObject[0].style.visibility='visible'
    }
    onMouseOut(e, index) {
        let test1 = document.getElementById(index)
        $(test1)[0].style.visibility = 'hidden'
        // $(test1).prev().prevObject[0].style.visibility='hidden'
    }
    setFloatVisibelTrue(time) {
        console.log('time',time)
        this.props.dispatch({
            type: 'clinicAppointmentModels/setFloatVisibelTrue',
            payload: {
                witch: 'patientAppointment',
                clickTime:time
            }
        })
    }
    setModalTrue(time){
        console.log('modalTime',time)
        this.props.dispatch({
            type: 'clinicAppointmentModels/setClickTime',
            payload: {
                clickTime: time
            }
        })
        this.setState({
            showModal:true
        })
    }
    setModalFalse(){
        this.setState({
            showModal:false
        })
    }
    render() {
        let divs = [];
        let workingTime=moment().set({'hour': 9, 'minute': 0,'second':0});//设置起始时间 从早9：00开始
        console.log('workingTime',workingTime.add(20,'m'))
        for (let i = 1; i < 24; i++) {
            workingTime=workingTime.add(20,'m')  //没循环一次增加20分钟
            console.log('workingTime',workingTime) //此处打桩正常
            if (i == 8) {
                continue;
            }
            if (i % 3 == 0) {
                divs.push(<div className={index.tableDivBorder} onMouseOver={() => { this.onMouseOver(this, 'hidden' + i) }} onMouseOut={() => { this.onMouseOut(this, 'hidden' + i) }}>
                    <div id={'hidden' + i} className={index.hiddenDiv} >
                                        {/*  传入workingTime  点击事件打桩workingTime  输出17：00：00*/}
                        <div> <a onClick={this.setFloatVisibelTrue.bind(this,workingTime)}>预约</a>{'        '}<a onClick={this.setModalTrue.bind(this,workingTime)}>停诊</a></div>
                    </div>
                    <div style={{ color: '#B8B8B8', position: 'absolute', zIndex: 1 }}>儿童发育门诊</div>

                </div>)
            } else {
                divs.push(<div className={index.tableDivNoBorder} onMouseOver={() => { this.onMouseOver(this, 'hidden' + i) }} onMouseOut={() => { this.onMouseOut(this, 'hidden' + i) }}>
                    <div id={'hidden' + i} className={index.hiddenDiv}>
                        <div> <a onClick={this.setFloatVisibelTrue.bind(this,workingTime)}>预约</a>{'        '}<a onClick={this.setModalTrue.bind(this,workingTime)}>停诊</a></div>
                    </div>
                    <div style={{ color: '#B8B8B8', position: 'absolute', zIndex: 1 }}>儿童发育门诊</div>

                </div>)
            }
        }
        return (
            <div>
                <Modal
                    title="添加停诊"
                    visible={this.state.showModal}
                    onOk={this.setModalTrue.bind(this)}
                    onCancel={this.setModalFalse.bind(this)}
                >
                    <label>停诊时间</label>
                  <p>123</p>
                    <label style={{display:'inline-block'}}>停诊原因 </label>
                  <Input></Input>
                
                </Modal>




                <div style={{ width: '100vw', height: '5vh', display: 'flex' }} >
                    <div className={index.placeHodeDiv}>123</div>
                    <div className={index.topInformationDIv} style={{ borderBottom: '1px solid #DFDFDF' }}>
                        <div className={index.informationDetail}>
                            <div><a>孙晓艺</a></div>
                            <div>已预约0|儿童发育</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div name='divContent' style={{ display: 'flex' }}>
                        <div name='divUl' className={index.ulDiv} style={{ width: '10vw' }}>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>9:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>10:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '20vh' }}><b>11:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>13:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>14:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>15:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '30vh' }}><b>16:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', height: '15vh' }}><b>17:00</b></li>
                                <li style={{ textAlign: 'center', fontSize: '20px', marginTop: '5vh' }}><b>18:00</b></li>
                            </ul>
                        </div>
                        <div name='tableList' style={{ display: 'flex' }}>
                            <div name='tableDivs' style={{ marginTop: '5%' }}>
                                {divs.map((item, index) => {
                                    return item
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(DateTable)