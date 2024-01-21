import { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Table from './Table';
import Banner from './Banner';

function App() {
  let [value, setValue] = useState('')
  let [names, setNames] = useState(['alpha', 'arlot', 'aldous', 'thamuz', 'vale','brody'])
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
      if (names.length - 1 === 1) {
        alert(`Winner is: ${names[0]}`)
      }
    }
    else {
      alert('List should have atleast 2 names !')
    }
  }
  return (<>
    <div>
      {/* needs to implement */}
      <Banner message='message'/>
    </div>
    <div className='flex-col flex h-screen justify-center'>
      <div className='bg-slate-300'>
        <h1 className=' text-center text-3xl p-1'>Welcome to Random App</h1>
      </div>
      <div className="flex justify-center">
        <input className='text-left w-80 border-2 border-black rounded-md p-2 m-2 text-base' type='text' id='name-input' value={value} placeholder='add names here' onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAdd() }}></input>
      </div>
      <div className='flex justify-center'>
        <button className='bg-lime-500 rounded-md w-12 h-10 mx-2' type='button' id='btn' onClick={(value) => handleAdd(value)}>Add</button>
        <button className='bg-lime-500 rounded-md w-12 h-10 mx-2' type='button' id='random-btn' onClick={() => generateRandom()}>Get</button>
      </div>
      <div className='flex justify-center mt-3'>
        <Table nameList={names} handleRemove={handleRemove}/>
      </div>
    </div>
    </>
  );
}

export default App;
