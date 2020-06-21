import React, { useEffect } from 'react'
import {Table, Space} from 'antd';
import 'antd/dist/antd.css';


  
const ContactList = props => {

  useEffect(() => {
   console.log('props.contact update')
  }, [props.contacts])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tel',
      dataIndex: 'tel',
      key: 'tel',
    },
    {
      title: 'Line',
      dataIndex: 'line',
      key: 'line',
    },
  {
    title: 'Action',
    key: 'action',
    render: (text, record ) => (
      <Space size="middle">
        <a onClick={()=>props.editContact(record)}>Edit</a>
        <a onClick={()=>props.deleteContact(record.key)}>Delete</a>
      </Space>
    ),
  },
  ];
    return (
    <Table dataSource={props.contacts} columns={columns} />
    );
}

export default ContactList