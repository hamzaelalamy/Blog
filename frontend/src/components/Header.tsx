import { Link } from "react-router-dom"

const Header = () => {
    return (
      <header className="sticky top-0 right-0 flex items-center justify-between w-full p-6 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60">
        <Link to="/" className="text-2xl">
        Blog Sphere
      </Link>
      <Link to="/register" className="text-2xl">
        register
      </Link>
      <Link to="/login" className="text-2xl">
        login
      </Link>
      </header>
    )
  }
  
  export default Header
  