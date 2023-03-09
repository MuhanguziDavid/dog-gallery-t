import { Link } from 'react-router-dom';

const Navbar: React.FC<{}> = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Dog Gallery</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
