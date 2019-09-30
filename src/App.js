import React, {Component} from 'react';
import Header from './componentes/Header'
import api from './services/api';
import Main from './pages/main';
import Routes from './routes';
import './style.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Rocketseat</h1>
      </div>
    )
  }
} */

export default App;
