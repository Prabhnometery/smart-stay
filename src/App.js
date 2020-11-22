import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import SearchPage from './component/SearchPage/SearchPage'


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={() => <Home />} />
        <Route path='/search-page' component={() => <SearchPage /> } />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
