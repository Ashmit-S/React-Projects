import './App.css';
import React from 'react'
import { useState } from 'react';
import Navbar from './Components/Navbar'
import Movies from './Components/Movies';
import Home from './Components/Home';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [progress, setProgress] = useState(0)

  const handleSearchApp = (query) => {
    setSearchQuery(query);
  };
  return (
    <Router>
      <>
        <Navbar onSearch={handleSearchApp} />
        <LoadingBar
          height={3}
          color='#4a90e2'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<Home onSearch={handleSearchApp} />} />
          <Route exact path='/about' element={<About onSearch={handleSearchApp} />} />
          <Route exact path='/movies' element={<Movies query={searchQuery} setProgress={setProgress} />} />
        </Routes>
      </>
    </Router>
  )
}




//You will see that when you click on sports or technology or anything, the url above in the browser 
//changes but the page only updates when you reload it. So in order to force remount components, we will give them 
//unique keys so that the browser understands that it needs to remount the page now. 

//Component LifeCycle
//1. Mount = Birth of Component
//2. Update = Growth of Component
//3. Unmount = Death of Component

//componentDidMount() method runs after your component output has been rendered to the dom
//componentDidUpdate() method is invoked as soon as the updating happens i.e prop or state change
//componentWillUnmount() is called just before the compnent is destroyed and unmounted