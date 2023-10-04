import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleLg">/Spython</span>
            <span className="headerTitleSm">world ...</span>
        </div>
        <img 
          src="/assets/istockphoto-1178183695-612x612.png" 
          alt="" 
          className="headerImg" 
        />   
    </div>
  )
}
