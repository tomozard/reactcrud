import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd';


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
    //const { name, value } = event.target
    //setContact({ ...contact, [name]: value })
  }

  //const [contact, setContact] = useState(props.initialFormState)
  const [form] = Form.useForm()
  const onFinish = values => {
    //console.log(values)
    if(props.editing){
      props.updateContact(values, props.currentContact.key)
    }else{
      props.addContact(values)
    }
    form.resetFields()
    //setContact(props.initialFormState)
    //console.log(contact)
  };

  const cancelClick = () => {
    
  }
  
  useEffect(() => {
    /*
    form.setFieldsValue({
      name: 'Customer Name',
    })
    */
  }, [])

  useEffect(() => {
    //console.log('useEffect 2 : props.editing ', props.editing)
    if(props.editing){
      //console.log('useEffect 2 : props.currentContact ',props.currentContact)
      form.setFieldsValue({
        name: props.currentContact.name,
        email: props.currentContact.email,
        tel: props.currentContact.tel,
        line: props.currentContact.line,
      })
    }
  },[props.editing]);
return (
    <Form {...layout} form={form} name="contactForm" onFinish={onFinish} validateMessages={validateMessages} >
      <Form.Item name="name" label="Name" rules={[{ required: true }]} onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} onChange={handleInputChange}>
        <Input />
      </Form.Item>
      <Form.Item name="tel" label="Tel" onChange={handleInputChange} >
        <Input  />
      </Form.Item>
      <Form.Item name="line" label="Line" onChange={handleInputChange}>
        <Input/>
      </Form.Item>
      {/*
      
      <Form.Item label="Append" style={{ marginBottom: 0 }}>
        <Form.Item
          name={['appends.label']}
          style={{ display: 'inline-block', width: 'calc(45% - 8px)' }}
        >
          <Input placeholder="Input Label" />
        </Form.Item>
        <Form.Item
          name={['appends.value']}
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
      */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          {props.label.formSubmitButton}
        </Button>
        <Button type="default" htmlType="button" onClick={cancelClick}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
)
}

export default AddContactForm