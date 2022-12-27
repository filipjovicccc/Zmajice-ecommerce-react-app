import React from 'react'
import Modal from '../UI/Modal'
import "./Sorting.css"
import BiggerModal from '../UI/BigerModal'

function Sorting(props) {
  return (
    <BiggerModal className="full-size">
      <h1>Hello from modal</h1>        
       <button onClick={props.closeFilterModal}>Close</button>
    </BiggerModal>
  )
}

export default Sorting