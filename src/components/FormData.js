import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../style/card.css"

export  function FormData({name, email, img, onDelete}) {
  return (

        <div className="card" style={{ width: '18rem' }}>
            {img && <img src={img} className="card-img-top" alt="Uploaded"/>}

  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Email: {email}</p>
    <button className="btn btn-primary" onClick={onDelete}>Delete</button>
  </div>

        </div>

  )
}
