
export default {
    namespace: 'clinicAppointmentModels',
    state: {
        startDate: '',
        endDate: '',
        nowDate: '',
        witchModal:'', //[cusTable,patientAppointment]  
        floatVisibel: false,
        patientAppointmentVisible: false,
        clickTime:''
    },

    reducers: {
        setDataDate(state, data) {
            return { ...state, startDate: data.painent.startDate, endDate: data.painent.endDate, nowDate: data.painent.nowDate }
        },
        setFloatVisibelTrue(state, action) {
            console.log('执行了全局修改',action.payload.witch)
            console.log('clickTime',action.payload.clickTime)
            return { ...state, floatVisibel: true ,witchModal:action.payload.witch,clickTime:action.payload.clickTime}
        },
        setFloatVisibelFalse(state, { which }) {
            console.log('执行了关闭自定义模态框')
            return { ...state, floatVisibel: false }
        },
        setClickTime(state,action){
            return {...state,clickTime:action.payload.clickTime}
        }
    },
    effects: {

    },
    subscriptions: {
        //   redirect({ dispatch, history }) {
        //     return history.listen(({ pathname }) => {
        //         switch(pathname){
        //             case '/': 
        //                 dispatch({type:'changeTitle',pageTitle:'河马儿科'});
        //                 history.push('/Home');
        //                 break;
        //             case '/NewAppointment':
        //                     dispatch({type:'changeTitle',pageTitle:'新预约'});
        //                     break;
        //             case '/ReservationInquiry':
        //                     dispatch({type:'changeTitle',pageTitle:'预约查询'});
        //                     break;
        //             case '/PatientManagement':
        //                     dispatch({type:'changeTitle',pageTitle:'患者管理'});
        //                     break;
        //             case '/MedicalOrderExecution':
        //                     dispatch({type:'changeTitle',pageTitle:'遗嘱执行'});
        //                     break;
        //             case '/ReportQuery':
        //                     dispatch({type:'changeTitle',pageTitle:'报告查询'});
        //                     break;
        //             case '/PatientInformation':
        //                     dispatch({type:'changeTitle',pageTitle:'患者信息'});
        //                     break;
        //             case '/DoctorInformation':
        //                     dispatch({type:'changeTitle',pageTitle:'医生信息'});
        //         }
        //     });
        //   },
    }
};
