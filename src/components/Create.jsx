import axios from 'axios';
import React, { useState } from 'react'
import {Form , Checkbox , Button} from 'semantic-ui-react';
import {API} from '../constent/API'
import { useNavigate } from 'react-router-dom';


function Create() {
  const [firstname , setfirstname] = useState('');
  const [lostname , setlostname] = useState('');
  const [Check , setcheck ] = useState(false);

  const nav = useNavigate();

  const transver_data = async () => {
   await axios.post(API , {
    firstname,
    lostname,
    Check
  })
    nav('/read')
  }

  return (
    <Form className="form" >
      <Form.Field>
        <input type="text" placeholder="enter your firstname" value={firstname} onChange={ event => setfirstname(event.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <input type="text" placeholder="enter your lostname" value={lostname} onChange={ event => setlostname(event.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        
        <Checkbox label="accept the terms & conditions" checked={Check} onChange={ ()=>setcheck(!Check)} />
      </Form.Field> 
      <Button onClick={transver_data}> SUBMITE</Button>
    </Form >
  )
}
export default Create