import { Fragment } from 'react/jsx-runtime'
import Header from './components/header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Skills from './components/skills'
import Work from './components/work'
import Project from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <Fragment>
      <Header />
      <Home/>
      <AboutMe />
      <Skills />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
