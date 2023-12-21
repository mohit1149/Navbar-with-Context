import {Component} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  ToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.ToggleTheme}}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
