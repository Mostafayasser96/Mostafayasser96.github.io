import React from 'react';
import './App.css';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/services-page';
import PreviousWorksPage from './pages/previous-works-page';
import ClientsPage from './pages/clients-page';
import CommentsInfo from './components/comments/comments-info';
import CommentsPage from './pages/comments-page';
import CallUsPage from './pages/callUs-page';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' Component={Main} />
      <Route path='/services' Component={ServicesPage} />
      <Route path='/previousWork' Component={PreviousWorksPage} />
      <Route path='/clients' Component={ClientsPage} />
      <Route path='/comments' Component={CommentsPage} />
      <Route path='/call-us' Component={CallUsPage} />
      
      </Routes>
        
    </div>
  );
}

export default App;
