import React from 'react';

const todoCard =(props)=>{
  return(
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm ">
        
        <div className="card-body text-left">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Status: {props.status}</h6>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" id="edit-button" className="btn btn-sm btn-outline-secondary">Update</button>
              <button type="button" id="delete-button" href="#" onclick = {props.id} className="btn btn-sm btn-outline-secondary">Delete</button>
            </div>
            <small className="text-muted">Due {props.due} </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default todoCard