import { Fragment } from 'react/jsx-runtime'
import Header from './components/header'
import Home from './components/home'
import AboutMe from './components/aboutMe'

function App() {

  return (
    <Fragment>
      <Header />
      <Home/>
      <AboutMe />
    </Fragment>
  )
}

export default App
