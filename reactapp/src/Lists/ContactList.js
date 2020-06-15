import React from 'react'
import {Table, Space} from 'antd';
import 'antd/dist/antd.css';

  
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
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
  ];


const ContactList = props => {
    return (
    <Table dataSource={props.contacts} columns={columns} />
    );
}

export default ContactList