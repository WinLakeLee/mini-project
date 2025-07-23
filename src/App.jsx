import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
function App() {
  const [fish, setFish] = useState([]);
  useEffect(() => {
    axios.get('')
      .then((res) => {
        setFish(res)
      })
      .catch((e) => {
        console.log(e);
      })
  })

  return (
    <>
      <div className={style.container}>
        <Header/>
        <Suspense>
          <Routes>
            <Route path='/' element={<MainPage fish={fish}/>}></Route>
            <Route path='/docs' element={<Docs fish={fish}/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/sign' element={<sign/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
