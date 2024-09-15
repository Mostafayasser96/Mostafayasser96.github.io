import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import PreviousWork from './components/previous-work/previous-work';
import Clients from './components/clients/clients';
import Comments from './components/comments/comments';
import Register from './components/contact/register';


function App() {
  return (
    <div className="App">
        <Header />
        <Services />
        <PreviousWork />
        {/* <Clients /> */}
        {/* <Comments /> */}
        {/* <Register /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
