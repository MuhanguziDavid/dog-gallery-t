import { Link } from "react-router-dom"

const About: React.FC<{}> = () => {
  return (
    <div className="about">
      <h2>Hello</h2>
      <p>Thought I'd share some amazing images of dogs!!</p>
      <Link to="/">Go head and browse the wholesome gallery</Link>
      <div className="repo-link">
        Checkout the source-code at
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MuhanguziDavid/dog-gallery-t">GitHub</a>
      </div>
    </div>
  )
}

export default About
