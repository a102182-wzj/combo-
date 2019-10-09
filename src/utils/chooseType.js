import { Button, Radio, Tag, Icon, DatePicker, TimePicker, Form, Menu, Dropdown, Input,Select,Cascader } from 'antd';
const { Option } = Select;
//自定义的utils 返回DOM元素
export function chooseTypes(type,data){
    console.log('type',type,'data',data)
    switch(type){
        case 'Input':
            return <Input name={data.Attributes.name} >{data.text}</Input>
        case 'Select':
            return <Select defaultValue={data.Attributes.defaultValue} name={data.Attributes.name}>
                {data.children.map((item,index)=>{
                    return <Option value={item.value}>{item.text}</Option>
                })}
            </Select>
        case 'Cascader':
            return <Cascader name={data.Attributes.name} options={data.Attributes.options.options}>
            </Cascader>
        case 'Dropdown':
            return <Dropdown name={data.Attributes.name} >
            
            </Dropdown>
    }
}