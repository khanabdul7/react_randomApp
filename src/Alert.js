import { useEffect, useState } from "react"

const Alert = (props) => {
    let {showAlert, closeAlert, alertState} = props;
    return (<>
        {alertState.message &&
            <div style={{backgroundColor: alertState.color, width: '15em', display: 'flex', borderRadius:'5px'}}>
                <h4 style={{margin: '2px 4px 2px 4px'}}>{alertState.message}</h4>
                <button type="button" onClick={closeAlert} style={{margin: '2px 4px 2px auto'}}>x</button>
            </div>
        }
    </>
    )
}
export default Alert