import React, { Component, Fragment } from 'react';
import index from './index.less'
import CusDiv from '../newShift/index'
import PatientAppointment from '../patientAppointment/index'
import { connect } from 'dva'
class FloatDiv extends Component {
    componentWillMount() {

    }
    render() {

        return (
            <div className={index.floatDiv}>
                {(() => {
                    switch (this.props.witchModal) {
                        case 'cusTable':
                            return <CusDiv></CusDiv>
                        case 'patientAppointment':
                            return <PatientAppointment></PatientAppointment>;
            }
          }
          )()}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { witchModal } = state.clinicAppointmentModels;
    return {
        witchModal
    };
};
export default connect(mapStateToProps)(FloatDiv) 