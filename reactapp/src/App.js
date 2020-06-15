import React, { useState } from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

import ContactList from './Lists/ContactList'
import AddContactForm from './Forms/AddContactForm'

const App = () => {
  const contactsData = [

  ]

  const [contacts, setContacts] = useState(contactsData)

  const addContact = contact => {
    contact.id = contacts.length + 1
    setContacts([...contacts, contact])
  }
  return (
    <div className="container">
      <h1>Contact</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <h2>Add Contact</h2>
          <AddContactForm addContact={addContact}/>
        </Col>
        <Col span={16}>
          <h2>Contact Lists</h2>
          <ContactList contacts={contacts}/>
        </Col>
      </Row>
    </div>
  )
}

export default App;
