import { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import Docs from './pages/Docs';
import Register from './pages/Register'
import Sign from './pages/Sign'
import Details from './pages/Details';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from './redux/posts';

function App() {
  const [fish, setFish] = useState([]);
  const dispatch = useDispatch();

  const Board = lazy(() => import('./pages/Board'))

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

useEffect(() => {
  axios.get('../data/posts.json')
    .then(res => dispatch(addPost(res.data)))
    .catch(err => console.error(err));
}, []);

  return (
    <>
      <div className='container'>
        <Header />
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <Routes>
            <Route path='/' element={<MainPage fish={fish} />} />
            <Route path='/docs' element={<Docs fish={fish} />}>
              <Route path=':id' element={<Details fish={fish} />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/sign' element={<Sign />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
