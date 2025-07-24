import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import Docs from './pages/Docs';
import Register from './pages/Register'
import Sign from './pages/Sign'
import Details from './pages/Details';

function App() {
  const [fish, setFish] = useState([]);
  useEffect(() => {
    async function useFetch() {

      await axios.get('https://raw.githubusercontent.com/WinLakeLee/data-bank/main/fish.json')
        .then(res =>
          setFish(res.data)
        )
        .catch(err =>
          console.log(err)
        )
    }
    useFetch()
  }, [])
  return (
    <>
      <div className='container'>
        <Header />
        <Suspense fallback={<div>로딩중</div>}>
          <Routes>
            <Route path='/' element={<MainPage fish={fish} />} />
            <Route path='/docs' element={<Docs fish={fish} />}>
              <Route path=':id' element={<Details fish={fish} />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/sign' element={<Sign />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
