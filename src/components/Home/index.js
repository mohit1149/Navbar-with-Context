// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainer = isDarkTheme
        ? 'home-container-black'
        : 'home-container'
      const homeHeading = isDarkTheme ? 'home-heading-black' : 'home-heading'

      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
            )}
            <h1 className={homeHeading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
