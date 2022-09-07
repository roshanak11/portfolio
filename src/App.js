import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectOne from './components/Project1'
import ProjectTwo from './components/Project2'
import ProjectThree from './components/Project3'
import ProjectFour from './components/Project4'
import Passions from './components/Passions'
import NatureExercisePhotography from './components/NatureExercisePhotography'
import Travel from './components/Travel'
import TheaterArts from './components/TheaterArts'
import Psychology from './components/Psychology'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-one" element={<ProjectOne />} />
        <Route path="/project-two" element={<ProjectTwo />} />
        <Route path="/project-three" element={<ProjectThree />} />
        <Route path="/project-four" element={<ProjectFour />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/nature-exercise-photography" element={<NatureExercisePhotography />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/theater-arts" element={<TheaterArts />} />
        <Route path="/psychology" element={<Psychology />} />
      </Routes>
    </Router>
  )
}

export default App
