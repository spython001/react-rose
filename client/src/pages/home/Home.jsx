import "./home.css"
import Header from '../../components/header/Header'
import Posts from "../../components/posts/Posts"
import "./home.css"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation();

  console.log(location);

  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get("http://localhost:8000/api/posts")
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Posts posts={ posts }/>
      </div>
    </>
  )
}
