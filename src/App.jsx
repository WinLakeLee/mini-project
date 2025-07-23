import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import Docs from './pages/Docs';
import Register from './pages/Register'
import Sign from './pages/Sign'

function App() {
  const [fish, setFish] = useState([]);
  useEffect(() => {
    async function fetchFish() {
      const data = await axios.get('https://raw.githubusercontent.com/WinLakeLee/data-bank/main/fish.json')
      setFish([data])
    }
    fetchFish();
  }, [])
  return (
    <>
      <div className='container'>
        <Header/>
        <Suspense>
          <Routes>
            <Route path='/' element={<MainPage fish={fish}/>}></Route>
            <Route path='/docs' element={<Docs fish={fish}/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/sign' element={<Sign/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
