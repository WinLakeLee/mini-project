import Carousels from "../components/Carousels";
import PopularPosts from "../components/PopularPosts";
import { useState, useEffect } from "react";
import axios from "axios";

const MainPage = ({ fish }) => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  axios.get('https://raw.githubusercontent.com/WinLakeLee/data-bank/main/posts.json')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
}, []);
  return (
    <>
      <Carousels fish={fish} />
      <PopularPosts posts={posts} />
    </>
  );
};

export default MainPage;