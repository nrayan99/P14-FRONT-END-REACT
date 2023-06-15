import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Header() {
  const location = useLocation()
  const linkClassName = (link: string) => `text-primary hover:text-primary/80 ${link === location.pathname ? 'underline' : ''}`

  return (
    <div className="bg-secondary p-4 flex justify-between items-center">
      <Link to="/">
      <span className="font-bold text-2xl text-primary">
      HRnet
        </span>
        </Link>

        <nav>
          <ul className="flex space-x-1 sm:space-x-4 font-bold text-lg">
            <li>
              <Link to="/create" className={linkClassName('/create')}>
                Create employee
              </Link>
            </li>
            <li>
              <Link to="/list" className={linkClassName('/list')}>
                Current employees
              </Link>
            </li>
            </ul>
        </nav>
      </div>
  )
}

export default Header