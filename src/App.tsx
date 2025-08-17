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
  heading:string,
  image ?:string,
  livelink:string,
  githublink:string,
  toolsused:string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "NotesAdda",
    heading: "Full-Stack Notes application",
    description:
      "Developed a web application for students to access notes, previous year questions, and video lectures. Built an admin interface for uploading PDFs and video lectures. Implemented secure login and registration with Firebase Authentication, and used Firestore and Firebase Storage for efficient, scalable data management.",
    image: "/Project1.png",
    livelink: "https://dypatilnotes.netlify.app/",
    githublink: "https://github.com/Aditya1979314/NotesAdda",
    toolsused: ["React", "firebase", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Cinematography Website & CMS",
    heading: "Dynamic Website with Content Management System",
    description:
      "Developed a complete cinematography website along with a custom content management system (CMS). The website showcases cinematography projects with an elegant, responsive frontend, while the CMS allows administrators to manage content seamlessly. Integrated Firebase Authentication for secure access, Firebase Storage for handling high-quality media files, and Firestore for scalable data storage.",
    image: "/Project2.png",
    livelink: "https://unofficialfimmaker.netlify.app/",
    githublink: "https://github.com/Aditya1979314/Cinematography-portfolio",
    toolsused: ["React", "TailwindCSS", "JavaScript","firebase"],
  }
];

export function App() {
  
  return <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home projects={projects}/>} />
        <Route path="/projects/:id" element={<ProjectCaseStudy projects={projects} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects}/>} />
      </Routes>
    </Router>;
}