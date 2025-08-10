import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import ProjectsPage from './pages/ProjectsPage';
import Navbar from './components/Navbar';
export function App() {
  return <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectCaseStudy />} />
        <Route path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>;
}