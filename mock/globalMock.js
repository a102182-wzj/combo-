import mockjs from 'mockjs';
export default {
    'GET /api/doctorInformation': mockjs.mock({
        'doctors|8-10': [{
            name: '@name', id: '@id', field: '儿童发育', alreadyReserved: mockjs.mock({
                "number|1-20": 20
            })
        }]
    }),
    'GET /api/patientAppointment': mockjs.mock({
        'form': [{
            name: 'name',
            type: 'Input',
            placeholder: '请输入电话',
            label: '姓名',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            }
        },
        {
            name: 'phone',
            type: 'Input',
            placeholder: '请输入电话',
            label: '联系电话',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            }
        },
        {
            type: 'Select',
            name: 'gender',
            label: '性别',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            },
            options: [{
                value: '男',
                text: '男',
                disabled: false
            }, {
                value: '女',
                text: '女',
                disabled: false
            }]
        },
        {
            name: 'age',
            type: 'Input',
            placeholder: '请输入年龄',
            label: '年龄',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            }
        },
        {
            type: 'Select',
            name: 'treatment',
            label: '就诊类型',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            },
            options: [{
                value: '初诊',
                text: '初诊',
                disabled: false
            }, {
                value: '复诊',
                text: '复诊',
                disabled: false
            }, {
                value: '生长发育',
                text: '生长发育',
                disabled: false
            }, {
                value: '心里咨询',
                text: '心里咨询',
                disabled: false
            }, {
                value: '康复治疗',
                text: '康复治疗',
                disabled: false
            }, {
                value: '中医推拿',
                text: '中医推拿',
                disabled: false
            }]
        },
        {
            type: 'Select',
            name: 'identity',
            label: '患者身份',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            },
            options: [{
                value: '安心卡',
                text: '安心卡',
                disabled: false
            }, {
                value: '无忧卡',
                text: '无忧卡',
                disabled: false
            }, {
                value: '普通',
                text: '普通',
                disabled: false
            }, {
                value: '会员',
                text: '会员',
                disabled: false
            }, {
                value: 'VIP',
                text: 'VIP',
                disabled: false
            }]
        },
        {
            type: 'DatePicker',
            name: 'birthDay',
            label: '出生日期',
            rules: {
                enum: {
                    rule: '',
                    message: ''
                },
                len: {
                    rule: 100,
                    message: '长度为100'
                },
                max: {
                    rule: 100,
                    message: '最大长度为100'
                },
                message: {
                    rule: '',
                    message: ''
                },
                min: {
                    rule: 2,
                    message: '最小长度为2'
                },
                pattern: {
                    rule: '',
                    message: ''
                },
                required: {
                    rule: true,
                    message: '此项为必填'
                },
                transform: {
                    rule: '',
                    message: ''
                },
                type: {
                    rule: '',
                    message: ''
                },
                validator: {
                    rule: '',
                    message: ''
                },
                whitespace: {
                    rule: false,
                    message: '空格为非法字符'
                },
            }
        },
        ]
    })
};