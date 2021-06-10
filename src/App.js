import React, { useContext, useState, useEffect, useRef } from 'react';
import './App.css';
import Api from './components/Api'
import OwnForm from './components/OwnForm';
// import Reducer from './components/Reducer';
// import Context from './components/Context';
const Value = React.createContext(null)
function App() {
  const [data, setData] = useState([])
  const [countValue, setCountValue] = useState(0)
  const keyHandler = useRef('Enter')
  useEffect((e) => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(res => setData(res))
    keyHandler.current.focus()
  }, [])
  console.log(data)
  console.log(keyHandler.current.getBoundingClientRect)

  const keyHandled = () => {
    setCountValue(countValue + 1)
  }

  return (
    <div className="App">

      {data ? <Api val={data} count={countValue} /> : '...loading'}
      {/* bewakoofi in upper code  */}


      <button ref={keyHandler} onKeyPress={
        keyHandled
      }>Fetch data</button>
      <Value.Provider value={{ data, countValue }}>
        {/* <Context value={data} /> */}
        {/* <Checker /> */}
      </Value.Provider>
      {/* <Reducer /> */}
      <OwnForm />
    </div>

  );
}
const Checker = () => {
  const { data, countValue } = useContext(Value)
  return (
    <pre>{JSON.stringify(data[countValue], null, 2)}</pre>
  )
}

export default App;