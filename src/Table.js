
const Table = (props) => {
    let {nameList} = props
    // console.log('namelist: ',nameList)
    return (
        <table>
            <thead>
                <tr>
                    <th>Names List</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {nameList && nameList.map(name =>
                    <tr key={name}>
                        <td>{name}</td>
                        <td onClick={()=>props.handleRemove(name)}>X</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table