// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundContainer = isDarkTheme
        ? 'not-found-container-black'
        : 'not-found-container'
      const notFoundHeading = isDarkTheme
        ? 'not-found-heading-black'
        : 'not-found-heading'
      const notFoundParagraph = isDarkTheme
        ? 'not-found-paragraph-black'
        : 'not-found-paragraph'

      return (
        <>
          <Navbar />
          <div className={notFoundContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={notFoundHeading}>Lost Your Way?</h1>
            <p className={notFoundParagraph}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
