// import { useEffect } from 'react'
import './Modal.css'
import { Constants } from './Constants'
import { useState } from 'react'

const Modal = (props) => {

    const { modalState, setModalState, saveList } = props
    const { isOpen, heading, msg } = modalState
    const [response, setResponse] = useState('')
    // useEffect(()=>{
    //     if(heading === Constants.CONFIRMATION){
    //         type 
    //     }
    // })

    // Used to provide filename to saveList fxn.
    const handleSaveButton = (value) => {
        console.log('Saving...', value)
        saveList(value)
        setResponse('')
        closeModal()
    }

    const closeModal = () => {
        setModalState({ ...modalState, isOpen: false })
    }

    //rendering body of modal
    const renderBody = (type = Constants.INFORMATION) => {
        if (type === Constants.REQUIRED) {
            return (
                <>
                    <h4>{msg}</h4>
                    <input type='text' className='w-60 m-auto' placeholder='Enter Name' value={response} onChange={(e) => (setResponse(e.target.value))} />
                </>
            )
        } else {
            return <h4>{msg}</h4>
        }
    }

    //rendering footer of modal
    const renderButtons = (type = Constants.INFORMATION) => {
        switch (type) {
            case Constants.REQUIRED:
                return (
                    <>
                        <button className='bg-lime-500 rounded-md w-12 h-6 m-0.5' onClick={() => handleSaveButton(response)} type='button' id='save-btn'>Save</button>
                        <button className='bg-lime-500 rounded-md w-12 h-6 m-0.5' onClick={closeModal} type='button' id='cancel-btn'>Cancel</button>
                    </>
                )
            default:
                return (
                    <button className='ok-btn bg-lime-500 rounded-md w-8 h-fit m-0.5' onClick={closeModal} type='button' id='ok-btn'>ok</button>
                )
        }
    }
    return (
        <>
            {isOpen ?
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h3>{heading}</h3>
                            <button className="btn_x bg-slate-500 rounded-md w-6 " type="button" onClick={closeModal}>X</button>
                        </div>
                        <div className="modal-body">
                            {renderBody(heading)}
                        </div>
                        <div className="modal-footer">
                            {renderButtons(heading)}
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Modal