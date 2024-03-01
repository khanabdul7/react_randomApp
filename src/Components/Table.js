import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './Table.css'
const Table = (props) => {
    let {nameList} = props
    return (<>
       {nameList.length>0 ? <table className='w-64'>
          <thead>
            <tr className='text-xl'>
              <th className='border-2'>Names</th>
              <th className='border-2'>Action</th>
            </tr>
          </thead>
          <tbody>
             {nameList.map(name => {
              return (
                <tr key={name}>
                  <td className='px-2 border-2'>{name}</td>
                  <td className='border-2 px-2'><FontAwesomeIcon className='action' onClick={()=>props.handleRemove(name)} icon={faTrash}/></td>
                </tr>
              )
            })
            }
          </tbody>
        </table> : 'Please add some names to show here'}
        </>
    )
}

export default Table