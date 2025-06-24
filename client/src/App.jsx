import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Reviews from './pages/Reviews.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
      <Route path="/projects/:id" element={<ProjectDetails/>}/>
</Routes>
  );
}