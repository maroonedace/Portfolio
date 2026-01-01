import { Fragment } from 'react/jsx-runtime'
import Header from './components/header/file'
import AboutMe from './components/aboutMe/file'
import Home from './components/home/file'

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
