import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) =>  (
   <Modal
   isOpen={!!props.selectedOption}
   contentLabel="isSelected"
   onRequestClose={props.handleClearSelectedOption}
   >
   <h3>Selected</h3>
   {props.selectedOption && <p> {props.selectedOption} </p> }
   <button 
   onClick={props.handleClearSelectedOption}
   >
   Ok
   </button>
   </Modal>
  )

export default OptionModal;