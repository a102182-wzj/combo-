
import React, { Component, Fragment } from 'react';
import index from './index.less'
import { connect } from 'dva'
import { Modal, Button } from 'antd';
class CusModal extends Component {
    state = {
        SchedulingModal: false
    }
    closeCusModal() {
        this.props.dispatch({
            type: 'clinicAppointmentModels/setCusModalVisibleFalse'
        })
    }
    
    render() {
        const style={
            width:'100px'
        }
        return (
            <div className={index.modalDiv}>
                <Modal
            title="20px to Top"
            visible={this.props.cusModalVisible}
            // onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.closeCusModal()}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { cusModalVisible } = state.clinicAppointmentModels;
    return {
        cusModalVisible
    };
};
export default connect(mapStateToProps)(CusModal) 