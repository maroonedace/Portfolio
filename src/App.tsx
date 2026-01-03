import { Fragment } from 'react/jsx-runtime'
import Header from './components/header'
import HomeSection from './components/home'
import AboutMeSection from './components/aboutMe'
import WorkSection from './components/work'
import ProjectSection from './components/project'
import ContactSection from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <Fragment>
      <Header />
      <HomeSection/>
      <AboutMeSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </Fragment>
  )
}

export default App
