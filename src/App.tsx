import React from 'react';
import './App.css';
import Main from './pages/main';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ServicesPage from './pages/services-page';
import PreviousWorksPage from './pages/previous-works-page';
import ClientsPage from './pages/clients-page';
import CommentsInfo from './components/comments/comments-info';
import CommentsPage from './pages/comments-page';
import CallUsPage from './pages/callUs-page';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/previousWork' element={<PreviousWorksPage />} />
          <Route path='/clients' element={<ClientsPage />} />
          <Route path='/comments' element={<CommentsPage />} />
          <Route path='/call-us' element={<CallUsPage />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
