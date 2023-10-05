import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
          className="postImg"
          src="/assets/2ndChoice.png" 
          alt="" 
        />
        <div className="postInfo">
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}
