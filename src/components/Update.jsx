import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Form , Checkbox , Button} from 'semantic-ui-react';
import { API } from '../constent/API';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [firstname , setfirstname] = useState('');
  const [lostname , setlostname] = useState('');
  const [Check , setcheck ] = useState();
  const [id , setid] = useState('')

  const nav = useNavigate();

  useEffect(()=> {
    setid(localStorage.getItem('id'))
    setfirstname(localStorage.getItem('firstname'))
    setlostname(localStorage.getItem('lostname'))
    setlostname(localStorage.getItem('check'))
  }
  
  ,[])

  const userupdate = async () => {
    await axios.put(API + id , {
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
      <Button onClick={userupdate}> SUBMITE </Button>
    </Form >
  )
}

export default Update