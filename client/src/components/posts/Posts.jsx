import Post from "../post/Post"
import "./posts.css"
import { motion, useScroll, } from "framer-motion"
import { useRef } from "react"

export default function Posts() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYprogress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div 
      className="posts"
      ref={ref}
      style={{
        scale: scrollYprogress,
        opacity: scrollYprogress
      }}
    >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </motion.div>
  )
}
