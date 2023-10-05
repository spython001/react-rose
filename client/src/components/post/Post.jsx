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
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit cumque animi adipisci iste? 
            Commodi reprehenderit earum perspiciatis soluta fuga? 
            Assumenda praesentium corporis optio deleniti nihil, dicta omnis incidunt nam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit cumque animi adipisci iste? 
            Commodi reprehenderit earum perspiciatis soluta fuga? 
            Assumenda praesentium corporis optio deleniti nihil, dicta omnis incidunt nam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit cumque animi adipisci iste? 
            Commodi reprehenderit earum perspiciatis soluta fuga? 
            Assumenda praesentium corporis optio deleniti nihil, dicta omnis incidunt nam.
        </p>
    </div>
  )
}
