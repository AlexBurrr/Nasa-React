import './App.css';
import Nav from './Components/Nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './Pages/About'
import Home from './Pages/Home'

function App() {
  return (

    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
