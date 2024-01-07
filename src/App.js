import { useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  let [value, setValue] = useState('')
  let [names, setNames] = useState(['abdul', 'salman', 'imran'])
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    if (value !== '') {
      setNames([...names, value])
      setValue('')
    }
  }

  const handleRemove = (name) => {
    const found = names.filter(n => n !== name);
    setNames([...found])
  }

  const generateRandom = () => {
    if (names.length > 1) {
      let high = names.length - 1
      let low = 0
      let randomIndexWithRange = Math.floor(Math.random() * (high - low + 1)) + low
      let randomName = names[randomIndexWithRange]
      // console.log(`name: ${names[randomIndexWithRange]} --> index: ${randomIndexWithRange}`)
      alert(randomName)
      handleRemove(randomName)
      if(names.length-1 === 1){
        alert(`Winner is: ${names[0]}`)
      }
    }
    else{
      alert('List should have atleast 2 names !')
    }
  }
  return (
    <>
      <h1>Welcome to Random App</h1>
      <div>
        <input type='text' id='name-input' value={value} placeholder='add names here' onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAdd() }}></input>
        <button type='button' id='btn' onClick={(value) => handleAdd(value)}>Add</button>
        <button type='button' id='random-btn' onClick={() => generateRandom()}>Random</button>
      </div>
      <div>
        {names.length>0 && <Table nameList={names} handleRemove={handleRemove} />}
      </div>

    </>
  );
}

export default App;
