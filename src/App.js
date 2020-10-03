import React from 'react';
import './App.css';
import Course from './components/courseDetails';
import Header from './components/Header';
import Part1 from './components/part1';
import Part3 from './components/part3';
import Part4 from './components/part4';
import Part5 from './components/part5';
import Footer from './components/footer';

function App() {

  return (
    <>
        <Header />
        <Course />
        <Part3 />
        <Part3 style={{margin:'60px 0px'}} />
        <Part4 />
        <Part5 />
        <Footer /> 
    </>
  );
}

export default App;
