import React, { useState, useEffect } from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

import ContactList from './Lists/ContactList'
import AddContactForm from './Forms/AddContactForm'

const App = () => {
  const contactsData = [

  ]
  const [label,setLabel] = useState({form:'Add Contact',formSubmitButton:'Add',list:'Contact Lists'});
  const initialFormState = { key: null, name: '', email: '' , tel: '' , line: '' }
  const [editing, setEditing] = useState(false)
  const [currentContact, setCurrentContact] = useState(initialFormState)
  const [contacts, setContacts] = useState(contactsData)

  const addContact = contact => {
    contact.key = contacts.length + 1
    setContacts([...contacts, contact])
  }
  const deleteContact = key => {
    setContacts(contacts.filter(contact => contact.key !== key))
  }
  const editContact = contact => {
    setEditing(true)
    setCurrentContact(contact)
  }
  const updateContact = (contactUpdate, key) => {
    let updateIndex = contacts.findIndex(contact => contact.key === key)
    let contactsTemp = contacts;
    contactsTemp[updateIndex] = {key: key, name: contactUpdate.name, email: contactUpdate.email , tel: contactUpdate.tel , line: contactUpdate.line}
    setContacts(contactsData)
    setContacts(contactsTemp)
    setCurrentContact(initialFormState)
    setEditing(false)
  }
  useEffect(()=>{
    if(editing){
      setLabel({form:'Edit Contact',formSubmitButton:'Update'})
    }else{
      setLabel({form:'Add Contact',formSubmitButton:'Add'})
    }
  },[editing])
  return (
    <div className="container">
      <h1>Contact</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
  <h2>{label.form}</h2>
          <AddContactForm addContact={addContact} initialFormState={initialFormState} editing={editing} currentContact={currentContact} label={label} updateContact={updateContact}/>
        </Col>
        <Col span={16}>
          <h2>{label.list}</h2>
          <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
        </Col>
      </Row>
    </div>
  )
}

export default App;
