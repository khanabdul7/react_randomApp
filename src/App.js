import { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Table from './Table';
import Banner from './Banner';
import Modal from './Modal';
import { Constants } from './Constants';

function App() {
  let [value, setValue] = useState('')
  let [names, setNames] = useState(['alpha', 'arlot', 'aldous', 'thamuz', 'vale', 'brody'])
  let [fileName, setFileName] = useState()
  const[modalState, setModalState] = useState({
    isOpen: false,
    heading: '',
    msg: '',
})
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    if (value !== '') {
      setNames([...names, value])
      setValue('')
    }
  }

  // Used to manipulate array values
  const handleRemove = (name) => {
    const found = names.filter(n => n !== name);
    setNames([...found])
    if (found.length === 1) {
      setModal(true, 'WINNER !!', `Winner is: ${found[0]}`)
    }
  }

  // Used to get random values from list.
  const generateRandom = () => {
    if (names.length > 1) {
      let high = names.length - 1
      let low = 0
      let randomIndexWithRange = Math.floor(Math.random() * (high - low + 1)) + low
      let randomName = names[randomIndexWithRange]
      // console.log(`name: ${names[randomIndexWithRange]} --> index: ${randomIndexWithRange}`)
      setModal(true, 'Random Name', randomName)
      handleRemove(randomName)
    }
    else {
      setModal(true, 'Information', 'List should have atleast 2 names !')
    }
  }

  //Used to download file.
  const saveList = (value) => {
    // console.log(names.join(', '))
    const link = document.createElement("a");
    const file = new Blob([names.join(', ')], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = value ? `${value}.txt` : "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const handleFileSelect = (event)=>{
    if(event.target.files){
      setFileName(event.target.files[0])
    }
  }

  //Used to upload a file and render it in table view.
  const uploadList = () =>{
    let file;
    if(fileName && fileName.type === 'text/plain'){
      file = fileName;
    }
    if(fileName && fileName.type !== 'text/plain'){
      setModal(true, 'Information', 'Selected file should be a text file!')
    }
    if(!fileName){
      setModal(true, 'Information', 'Please select file to upload!')
    }

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        console.log('File content:', fileContent);

        let arr = fileContent.split(', ')
        // console.log(arr)
        setNames([...arr])
      };

      reader.readAsText(file);
    }
  }

  //used to toggleModal and set its values.
  const setModal = (open, header, msg)=>{
    modalState.isOpen = open;
    modalState.heading = header;
    modalState.msg = msg;
    setModalState({...modalState})
}
  return (<>
    <div>
      {/* needs to implement */}
      <Banner message='message' />
    </div>
    <div className='flex-col flex h-screen justify-center'>
      <div className='bg-slate-300'>
        <h1 className=' text-center text-3xl p-1'>Welcome to Random App</h1>
      </div>
      <div className="flex justify-center">
        <input className='text-left w-80 border-2 border-black rounded-md p-2 m-2 text-base' type='text' id='name-input' value={value} placeholder='add names here' onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAdd() }}></input>
      </div>
      <div className="flex justify-center mb-2">
        <input type='file' id='upload-btn' onChange={(e)=>handleFileSelect(e)} ></input>
      </div>
      <div className='flex justify-center'>
        <button className='bg-lime-500 rounded-md w-12 h-10 mx-2' type='button' id='btn' onClick={(value) => handleAdd(value)}>Add</button>
        <button className='bg-lime-500 rounded-md w-12 h-10 mx-2' type='button' id='random-btn' onClick={() => generateRandom()}>Get</button>
        <button className='bg-lime-500 rounded-md w-20 h-10 mx-2' type='button' id='save-btn' onClick={() => setModal(true, Constants.REQUIRED, Constants.PleaseEnterName)}>save list</button>
        <button className='bg-lime-500 rounded-md w-20 h-10 mx-2' type='button' id='upload-btn' onClick={() => uploadList()}>upload list</button>
      </div>
      <div className='flex justify-center mt-3'>
        <Table nameList={names} handleRemove={handleRemove} />
      </div>
      <Modal modalState={modalState} setModalState={setModalState} saveList={saveList}/>
    </div>
  </>
  );
}

export default App;
