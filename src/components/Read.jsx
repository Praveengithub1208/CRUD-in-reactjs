import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Table , Button} from 'semantic-ui-react'
import { API } from '../constent/API'
import { useNavigate } from 'react-router-dom';

function Read() {
  const [APIdata , setAPIdata] = useState([])
  
  const nav = useNavigate();

  const getdata = async () =>{
    const datas = await axios.get(API)
    setAPIdata(datas.data);
  }

  const deleterow = async (id) => {
    await axios.delete(API + id)
    getdata();
  } 

  const Update =({firstname,lostname,Check,id}) => {
    localStorage.setItem('id' , id)
    localStorage.setItem('firstname' , firstname)
    localStorage.setItem('lostname' , lostname)
    localStorage.setItem('check' , Check)
    nav('/update')
  }

  useEffect(() => {
    getdata();

  },[]);

  return (
   

    <Table singleLine className="structured-table">
      <Table.Header>
      <Table.Row>
       <Table.HeaderCell>FirstName</Table.HeaderCell>
        <Table.HeaderCell>LostName</Table.HeaderCell>
        <Table.HeaderCell>Chacked</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      
      <Table.Body>
      {
        APIdata.map(data =>(
          <Table.Row key={data.id}>
          <Table.Cell> {data.firstname} </Table.Cell>
          <Table.Cell> {data.lostname} </Table.Cell>
          <Table.Cell> {data.Check ? 'checked' : 'not checked'} </Table.Cell>
          <Table.Cell>
            <Button onClick={ () => deleterow(data.id) } >DELETE</Button>
          </Table.Cell> 
          <Table.Cell>
            <Button onClick={() => {Update(data)}}>Update</Button>
          </Table.Cell>
       </Table.Row>
          
         ))
       }
      </Table.Body>
    </Table>
  )
}

export default Read