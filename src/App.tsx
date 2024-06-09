import React from 'react';
import logo from './logo.svg';
import './App.css';



// define interface
interface Vehicle {
make : string;
model : string;
year : number;
start : ()=>void;
}

class Car implements Vehicle {
make : string;
model : string;
year : number;


constructor (make: string, model: string, year: number) {
this.make = make;
this.model = model;
this.year = year;
  }
  start = (): void => {
    console.log("[Engine Started] ");
  };
    }
    function App() {
  const fordMustang = new Car("United States",  "Ford Mustang", 1969);
  console.log(fordMustang)
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
