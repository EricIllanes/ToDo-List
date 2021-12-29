import './App.css';
import React from "react"
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompleteTask from './components/CompleteTask/CompleteTask';
import DeleteTask from './components/DeleteTask/DeleteTask';
import CreateTask from './components/CreateTask/CreateTask';




function App() {
  return (
    <div className='App'>

      <React.Fragment>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<CreateTask />} />
            <Route path="/completetask" element={<CompleteTask />} />
            <Route path="/deletetask" element={<DeleteTask />} />
          </Routes>
        </Router>
      </React.Fragment>

    </div>
  );
}

export default App;
