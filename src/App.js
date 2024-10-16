import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Classifica from './components/Classifica'
import { Component } from 'react';

//Componente react
class App extends Component {
  render () {
    return (
      <>
        <Navbar />
        <h1 className='container text-center mt-3 fw-bolder'>Girone Unico</h1>
        <Classifica />
      </>
      
    );
  }
}

export default App;
