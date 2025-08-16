import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import ProjectsPage from './pages/ProjectsPage';
import Navbar from './components/Navbar';

interface Project{
  id:number,
  title:string,
  description:string,
  image ?:string,
  link:string
}

const projects :Project[] = [{
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured online store with product catalog, shopping cart, and secure checkout.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 2,
    title: 'Portfolio App',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 3,
    title: 'Task Management Tool',
    description: 'A productivity application for managing tasks, projects, and team collaboration.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 4,
    title: 'Weather App',
    description: 'A weather forecast application with real-time data and location-based services.',
    image: "/Project1.png",
    link: '/projects'
  },{
    id: 4,
    title: 'Weather App',
    description: 'A weather forecast application with real-time data and location-based services.',
    image: "/Project1.png",
    link: '/projects'
  }];

export function App() {
  
  return <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home projects={projects}/>} />
        <Route path="/projects/:id" element={<ProjectCaseStudy projects={projects} />} />
        <Route path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>;
}