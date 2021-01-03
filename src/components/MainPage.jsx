import React, {useEffect, useState} from "react";
// import {useHistory} from "react-router-dom";
import Axios from '../config/axios'
import { Row, Col } from 'react-bootstrap'
import { todoCard } from './TodoCard';



const MainPage=(props)=>{
  let name;
  let description;
  let due;
  let status;
  let category;
  const [todos, setTodo] = useState([])

  const addTodo=(e)=>{
    e.preventDefault()

    Axios.post('/todos',{
      name,
      description,
      due,
      status,
      category
    },{
      headers:{
        access_token: localStorage.access_token
      }
    })
      .then(response => {
        console.log(response.data)
       
      })
      .catch((xhr, textStatus) => {
        console.log(xhr, textStatus)
      })

     

  };

  useEffect(()=>{
    async function fetchData() {
      const request= await Axios.get('/todos',{
        headers:{
          access_token: localStorage.access_token
        }
      })
      setTodo(request.data)
    }
    fetchData()
  }, [])
  console.log(todos)
  
  
  
  return (
  <Row className=" App-page d-flex bg-dark text-white text-center justify-content-center align-items-center">
    
    <Col sm={3}>
      <h2 id="user-name">{localStorage.name}</h2>
        <p id="user-email"> {localStorage.email}</p>
        <button className="btn btn-sm btn-danger btn-inline" id="logout-button" type="button">Logout</button>
        <hr/>
        <p><strong>Add todo:</strong></p>

        <form className="" action="/todos" method="POST" id="add-todo-form">
          <label htmlFor="todoName" className="sr-only">Name</label>
          <input type="text" id="todo-name" className="form-control" placeholder="Name" onChange={(e)=> name= e.target.value} required autoFocus />
          <textarea rows="2" cols="40" name="comment" id="description" form="add-todo-form" placeholder="Description" onChange={(e)=> description= e.target.value}></textarea>
          <label htmlFor="status" className="sr-only" >Status:</label>
          <select defaultValue={'DEFAULT'} className="form-control" id="status" onChange={(e)=> e.target.value ? status = e.target.value :status = 'Listed' } required autoFocus>
            <option value="DEFAULT" disabled>&mdash; Select Status &mdash;</option>
            <option>Listed</option>
            <option>Doing</option>
            <option>Done</option>
            <option>Rescheduled</option>
            <option>Expired</option>
          </select>
          <br/>
          <div >
            <label htmlFor="category" id="category">Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <label className="radio-inline"><input type="radio" name="category" value="Personal" onChange={(e)=> category= e.target.value} />  Personal&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <label className="radio-inline"><input type="radio" name="category" value="Project" onChange={(e)=>category= e.target.value}/>  Project</label>
          </div>
          <div >
            <label htmlFor="due" >Due:</label>
            <input type="date" id="due" className="form-control" name="due" placeholder="Due" onChange={(e)=> due= e.target.value} required autoFocus /><br />
          </div>
          <button className="btn btn-lg btn-success btn-block" onClick={addTodo} type="submit">Add</button>
        </form>
     
    </Col>
  
    <Col sm={9}>
      <h3>Your Todo List</h3>
      <hr/>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row" id="todos">
              <todoCard todos={todos}/>
            </div>
          </div>
        </div>
        <p className="mt-5 mb-3 text-muted">muchsin28 &copy; 2020</p>
    </Col >
    
  </Row>
      
)}

export default MainPage