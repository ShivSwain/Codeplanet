import React from 'react';
import './App.css';
import Course from './components/courseDetails';
import Header from './components/Header';
import Banner from './components/banner';
import LearningBox from './components/LearningDetailBoxes';
import ContactBox from './components/ContactBox';
import BlogBox from './components/Blog_FAQs';
import Footer from './components/footer';

function App() {

  return (
    <>
        <Header />
        <Banner />
        <Course />
        <LearningBox />
        <LearningBox />
        <ContactBox />
        <BlogBox />
        <Footer /> 
    </>
  );
}

export default App;
