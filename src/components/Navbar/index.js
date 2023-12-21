// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }
      const navContainer = isDarkTheme ? 'nav-container-black' : 'nav-container'

      const routeLink = isDarkTheme ? 'route-link-black' : 'route-link'

      return (
        <nav className={navContainer}>
          <div className="header-container">
            {isDarkTheme ? (
              <img
                alt="website logo"
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              />
            ) : (
              <img
                alt="website logo"
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              />
            )}

            <ul className="nav-items-list">
              <li className="link-item">
                <Link className={routeLink} to="/">
                  Home
                </Link>
              </li>
              <li className="link-item">
                <Link className={routeLink} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <button
              className="theme-button"
              type="button"
              onClick={onClickToggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  alt="theme"
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                />
              ) : (
                <img
                  alt="theme"
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                />
              )}
            </button>
          </div>
          <hr className="horizontal-line" />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
