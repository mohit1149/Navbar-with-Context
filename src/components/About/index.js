// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainer = isDarkTheme
        ? 'about-container-black'
        : 'about-container'
      const aboutHeading = isDarkTheme ? 'about-heading-black' : 'about-heading'

      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-img"
              />
            )}
            <h1 className={aboutHeading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
