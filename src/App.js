import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ImageList from './components/ImageList/ImageList';
import About from './components/About/About';
import Game from './components/Game/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Switch>
            <Route exact path="/whoami/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/gallery/" component={ImageList} />
            <Route path="/game/" component={Game} />
          </Switch>
        </main>
      </div>
    </Router>
    
  );  
};

export default App;
