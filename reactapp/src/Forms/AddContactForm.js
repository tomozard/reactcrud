import React, { useState } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';


const AddContactForm = props => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  
  const handleInputChange = event => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const initialFormState = { id: null, name: '', email: '' , tel: '' , line: '' };
  const [contact, setContact] = useState(initialFormState);

const onFinish = values => {
    console.log(values);
    props.addContact(values);
    setContact(initialFormState);
  };
return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['name']} label="Name" rules={[{ required: true }]} onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item name={['email']} label="Email" rules={[{ required: true, type: 'email' }]} onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item name={['tel']} label="Tel" onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item name={['line']} label="Line" onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item label="Append" style={{ marginBottom: 0 }}>
        <Form.Item
          name="label"
          style={{ display: 'inline-block', width: 'calc(45% - 8px)' }}
        >
          <Input placeholder="Input Label" />
        </Form.Item>
        <Form.Item
          name="value"
          style={{ display: 'inline-block', width: 'calc(45% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Input Value" />
        </Form.Item>
        
      <Form.Item style={{ display: 'inline-block', width: 'calc(10% - 8px)' }}>
        <Button type="primary" >
          +
        </Button>
      </Form.Item>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
)
}

export default AddContactForm