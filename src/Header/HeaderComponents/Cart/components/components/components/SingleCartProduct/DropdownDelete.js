import React from 'react'
import './DropdownDelete.css'
import deleteIcon from '../../../../../../../assets/images/icon-delete.svg'

function DropdownDelete(props) {
  return (
    <button onClick={() => props.removeItem(props.data.id)} id='dropdown-delete-btn'>
      <img src={deleteIcon}></img>
    </button>
  )
}

export default DropdownDelete